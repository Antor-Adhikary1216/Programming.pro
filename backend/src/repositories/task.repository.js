import { getDatabase } from '../config/db.js'

function getTasksCollection() {
  return getDatabase().collection('tasks')
}

export async function findTasks() {
  return getTasksCollection().find().sort({ createdAt: -1 }).toArray()
}

export async function findTaskById(taskId) {
  return getTasksCollection().findOne({ _id: taskId })
}

export async function createTaskRecord({ title }) {
  const now = new Date()
  const task = {
    title,
    completed: false,
    createdAt: now,
    updatedAt: now,
  }

  const result = await getTasksCollection().insertOne(task)
  return { ...task, _id: result.insertedId }
}

export async function updateTaskRecord(taskId, updates) {
  const result = await getTasksCollection().updateOne(
    { _id: taskId },
    { $set: { ...updates, updatedAt: new Date() } },
  )

  if (result.matchedCount === 0) return null

  return findTaskById(taskId)
}

export async function deleteTaskRecord(taskId) {
  const result = await getTasksCollection().deleteOne({ _id: taskId })
  return result.deletedCount === 1
}
