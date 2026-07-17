import 'dotenv/config'
import app from './app.js'
import { closeDatabase, connectDatabase } from './config/db.js'

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

async function shutdown(signal) {
  console.log(`\n${signal} received. Closing database connection.`)
  await closeDatabase()
  process.exit(0)
}

process.once('SIGINT', () => shutdown('SIGINT'))
process.once('SIGTERM', () => shutdown('SIGTERM'))

startServer()
