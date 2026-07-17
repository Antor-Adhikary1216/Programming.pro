import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/error.middleware.js'
import taskRoutes from './routes/task.routes.js'

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
  }),
)
app.use(express.json())
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))

app.get('/api/health', (_request, response) => {
  response.json({ success: true, message: 'API is running.' })
})

app.use('/api/tasks', taskRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
