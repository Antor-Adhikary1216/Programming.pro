import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import ProjectDetails from '../pages/ProjectDetails.jsx'
import Projects from '../pages/Projects.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import useScrollEffects from '../hooks/useScrollEffects.js'

function AppRoutes() {
  const location = useLocation()
  useScrollEffects(location.pathname)

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default AppRoutes
