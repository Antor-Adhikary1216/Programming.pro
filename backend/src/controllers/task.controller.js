import { ObjectId } from 'mongodb'
import {
  createTaskRecord,
  deleteTaskRecord,
  findTaskById,
  findTasks,
  updateTaskRecord,
} from '../repositories/task.repository.js'

function createHttpError(message, statusCode = 400) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

function assertValidId(id) {
  if (!ObjectId.isValid(id)) {
    throw createHttpError('Invalid task ID.')
  }

  return new ObjectId(id)
}

function normalizeTitle(title) {
  if (typeof title !== 'string' || !title.trim()) {
    throw createHttpError('Task title is required.')
  }

  const normalizedTitle = title.trim()

  if (normalizedTitle.length > 120) {
    throw createHttpError('Task title cannot exceed 120 characters.')
  }

  return normalizedTitle
}

export async function getTasks(_request, response) {
  const tasks = await findTasks()
  response.json({ success: true, data: tasks })
}

export async function getTask(request, response) {
  const taskId = assertValidId(request.params.id)
  const task = await findTaskById(taskId)

  if (!task) {
    throw createHttpError('Task not found.', 404)
  }

  response.json({ success: true, data: task })
}

export async function createTask(request, response) {
  const body = request.body ?? {}
  const task = await createTaskRecord({
    title: normalizeTitle(body.title),
  })
  response.status(201).json({ success: true, data: task })
}

export async function updateTask(request, response) {
  const taskId = assertValidId(request.params.id)
  const body = request.body ?? {}
  const updates = {}

  if (Object.hasOwn(body, 'title')) {
    updates.title = normalizeTitle(body.title)
  }

  if (Object.hasOwn(body, 'completed')) {
    if (typeof body.completed !== 'boolean') {
      throw createHttpError('Completed must be true or false.')
    }

    updates.completed = body.completed
  }

  if (Object.keys(updates).length === 0) {
    throw createHttpError('Provide a title or completed value to update.')
  }

  const task = await updateTaskRecord(taskId, updates)

  if (!task) {
    throw createHttpError('Task not found.', 404)
  }

  response.json({ success: true, data: task })
}

export async function deleteTask(request, response) {
  const taskId = assertValidId(request.params.id)
  const wasDeleted = await deleteTaskRecord(taskId)

  if (!wasDeleted) {
    throw createHttpError('Task not found.', 404)
  }

  response.json({ success: true, message: 'Task deleted.' })
}
