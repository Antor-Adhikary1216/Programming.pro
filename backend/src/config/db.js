import mongoose from 'mongoose'

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

  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  })

  console.log(
    `MongoDB Atlas connected: ${mongoose.connection.host}/${mongoose.connection.name}`,
  )
}
