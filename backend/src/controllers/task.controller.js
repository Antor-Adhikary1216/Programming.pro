import mongoose from 'mongoose'
import Task from '../models/task.model.js'

function assertValidId(id) {
  if (!mongoose.isValidObjectId(id)) {
    const error = new Error('Invalid task ID.')
    error.statusCode = 400
    throw error
  }
}

export async function getTasks(_request, response) {
  const tasks = await Task.find().sort({ createdAt: -1 })
  response.json({ success: true, data: tasks })
}

export async function getTask(request, response) {
  assertValidId(request.params.id)
  const task = await Task.findById(request.params.id)

  if (!task) {
    const error = new Error('Task not found.')
    error.statusCode = 404
    throw error
  }

  response.json({ success: true, data: task })
}

export async function createTask(request, response) {
  const task = await Task.create({ title: request.body.title })
  response.status(201).json({ success: true, data: task })
}

export async function updateTask(request, response) {
  assertValidId(request.params.id)

  const allowedUpdates = ['title', 'completed']
  const updates = Object.fromEntries(
    Object.entries(request.body).filter(([key]) => allowedUpdates.includes(key)),
  )

  const task = await Task.findByIdAndUpdate(request.params.id, updates, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    const error = new Error('Task not found.')
    error.statusCode = 404
    throw error
  }

  response.json({ success: true, data: task })
}

export async function deleteTask(request, response) {
  assertValidId(request.params.id)
  const task = await Task.findByIdAndDelete(request.params.id)

  if (!task) {
    const error = new Error('Task not found.')
    error.statusCode = 404
    throw error
  }

  response.json({ success: true, message: 'Task deleted.' })
}
