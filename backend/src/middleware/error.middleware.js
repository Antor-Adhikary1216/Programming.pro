export function notFound(request, _response, next) {
  const error = new Error(`Route not found: ${request.method} ${request.originalUrl}`)
  error.statusCode = 404
  next(error)
}

export function errorHandler(error, _request, response, _next) {
  let statusCode = error.statusCode || 500
  let message = error.message || 'Internal server error.'

  if (error.name === 'ValidationError') {
    statusCode = 400
    message = Object.values(error.errors)
      .map((item) => item.message)
      .join(' ')
  }

  response.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  })
}
