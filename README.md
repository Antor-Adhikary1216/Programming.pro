# MERN full-stack starter

This workspace contains two independent applications:

- `frontend/` — React, Vite, Tailwind CSS, React Router, React Icons, and a fetch-based API layer.
- `backend/` — Node.js, Express, MongoDB/Mongoose, and a REST API.

## Run locally

1. Create a MongoDB Atlas cluster.
2. Create an Atlas database user and add your current IP address to the Atlas Network Access list.
3. In Atlas, choose **Connect → Drivers → Node.js** and copy the `mongodb+srv://` connection string.
4. Replace the placeholder `MONGODB_URI` in `backend/.env` with that connection string. Keep `/programming_pro` before the query string to use that database.
5. In one terminal, run `cd backend`, then `npm run dev`.
6. In another terminal, run `cd frontend`, then `npm run dev`.
7. Open `http://localhost:5173`.

The frontend sends requests to `http://localhost:5000/api` by default.

## REST endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | API health check |
| GET | `/api/tasks` | List tasks |
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks/:id` | Get one task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

Keep real credentials only in `.env`; it is excluded from Git. If the Atlas password contains reserved URL characters, URL-encode it before placing it in the connection string. When adding new variables, update the matching `.env.example` file too.
