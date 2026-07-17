# Programming.pro — Full-Stack Developer Portfolio

A modern, responsive, and professionally designed full-stack developer portfolio built to showcase my skills, experience, featured projects, and development journey.

Programming.pro presents my work through a clean and user-focused interface, with dedicated pages for projects, project details, information about me, and contact options.

## Live Demo

Add your deployed website link here:

```text
https://your-live-site.vercel.app
```

## GitHub Repository

```text
https://github.com/Antor-Adhikary1216/Programming.pro
```

## About the Project

Programming.pro is my personal developer portfolio website.

I created this project to present my frontend and full-stack development skills in a professional format that can be shared with recruiters, clients, and other developers.

The portfolio includes my technical skills, selected projects, experience, background, and contact information. Each project can also have its own detail page where visitors can learn about the problem, solution, technologies, and development process.

## Features

- Modern and responsive portfolio design
- Professional hero section
- About-me introduction
- Technical skills showcase
- Featured project section
- Dedicated projects page
- Dynamic project-details pages
- Experience section
- Contact section
- Reusable navigation and footer
- Smooth page and scroll interactions
- Mobile, tablet, and desktop support
- Custom 404 route redirection
- Full-stack frontend and backend structure

## Pages

### Home

The homepage contains:

- Hero section
- About preview
- Skills
- Featured projects
- Experience
- Contact section

### Projects

Displays my selected web-development projects in a structured and visually engaging format.

### Project Details

Each project can have a dedicated page containing:

- Project overview
- Problem and solution
- Technologies used
- Important features
- Development challenges
- Live-demo link
- GitHub repository link

### About

Provides more information about my development journey, interests, approach to software development, and career goals.

### Contact

Allows recruiters, clients, and collaborators to connect with me.

## Tech Stack

### Frontend

- React.js 19
- JavaScript
- Vite
- Tailwind CSS
- React Router
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- REST API
- CORS
- Dotenv
- Morgan

### Development Tools

- Git
- GitHub
- npm
- Nodemon
- Oxlint
- Visual Studio Code

## Project Structure

```text
Programming.pro/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   └── layout/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

## Installation and Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Antor-Adhikary1216/Programming.pro.git
```

### 2. Enter the project directory

```bash
cd Programming.pro
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

## Backend Setup

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

The backend will normally run at:

```text
http://localhost:5000
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Do not upload your real `.env` file or credentials to GitHub.

Use `.env.example` to document the required variables without exposing private data.

## Available Backend Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check API status |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks/:id` | Get one task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Available Scripts

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Checks the frontend code with Oxlint.

```bash
npm run preview
```

Previews the production build locally.

### Backend

```bash
npm run dev
```

Runs the backend with Nodemon.

```bash
npm start
```

Runs the backend using Node.js.

```bash
npm run check
```

Checks the backend entry file for syntax errors.

## Responsive Design

The portfolio is designed to provide a consistent experience across:

- Mobile phones
- Tablets
- Laptops
- Desktop screens
- Large displays

## Future Improvements

- Add an admin dashboard
- Manage projects through MongoDB
- Add a working contact-form API
- Add email notifications
- Add project filtering
- Add a blog section
- Add dark and light themes
- Improve SEO metadata
- Add Open Graph sharing images
- Add automated testing
- Add accessibility improvements
- Add page-transition animations

## Purpose of the Project

This project was created to:

- Showcase my full-stack development skills
- Present my projects professionally
- Strengthen my React architecture skills
- Practice reusable component development
- Improve responsive UI design
- Work with React Router
- Develop and integrate REST APIs
- Practice Node.js, Express.js, and MongoDB
- Build a portfolio suitable for job and internship applications

## Author

**Antor Adhikary**

Full-Stack Web Developer focused on building modern, responsive, secure, and user-friendly web applications.

- GitHub: [Antor-Adhikary1216](https://github.com/Antor-Adhikary1216)
- LinkedIn: [Antor Adhikary](https://linkedin.com/in/antor-adhikary)
- Email: antoradhikari1612@gmail.com

## Feedback

Feedback and suggestions are always welcome.

You can open an issue or contact me directly if you have recommendations for improving the project.

## License

This project is created for portfolio and educational purposes.

You may use the project for learning and inspiration, but please provide appropriate credit when reusing substantial parts of the design or code.

---

If you found this project useful, consider giving the repository a star.
