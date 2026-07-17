const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(result.message || 'Unable to complete the project request.')
  }

  return result.data ?? result
}

export function getProjects() {
  return request('/projects')
}

export function getProjectById(id) {
  return request(`/projects/${id}`)
}

export function createProject(project) {
  return request('/projects', {
    method: 'POST',
    body: JSON.stringify(project),
  })
}

export function updateProject(id, project) {
  return request(`/projects/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(project),
  })
}

export function deleteProject(id) {
  return request(`/projects/${id}`, { method: 'DELETE' })
}
