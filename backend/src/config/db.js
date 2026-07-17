import { MongoClient } from 'mongodb'

let client
let database

export async function connectDatabase() {
  const { MONGODB_URI } = process.env

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined. Add it to backend/.env.')
  }

  if (MONGODB_URI.includes('YOUR_')) {
    throw new Error(
      'Replace the MongoDB Atlas placeholders in backend/.env with your database user, password, and cluster host.',
    )
  }

  client = new MongoClient(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  })

  try {
    await client.connect()
    database = client.db()
    await database.command({ ping: 1 })
    console.log(`MongoDB Atlas connected: ${database.databaseName}`)
  } catch (error) {
    await client.close()
    client = undefined
    database = undefined
    throw error
  }
}

export function getDatabase() {
  if (!database) {
    throw new Error('Database connection has not been established.')
  }

  return database
}

export async function closeDatabase() {
  if (!client) return

  await client.close()
  client = undefined
  database = undefined
}
