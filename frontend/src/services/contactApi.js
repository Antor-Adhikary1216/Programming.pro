const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export async function sendContactMessage(message) {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(result.message || 'Unable to send your message.')
  }

  return result.data ?? result
}
