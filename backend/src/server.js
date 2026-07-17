import 'dotenv/config'
import mongoose from 'mongoose'
import app from './app.js'
import { connectDatabase } from './config/db.js'

const port = process.env.PORT || 5000

async function startServer() {
  try {
    await connectDatabase()
    app.listen(port, () => {
      console.log(`API server running at http://localhost:${port}`)
    })
  } catch (error) {
    console.error(`Server startup failed: ${error.message}`)
    process.exit(1)
  }
}

process.on('SIGINT', async () => {
  await mongoose.connection.close()
  process.exit(0)
})

startServer()
