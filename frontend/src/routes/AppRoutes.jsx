import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Home from '../pages/Home.jsx'
import ProjectDetails from '../pages/ProjectDetails.jsx'
import Projects from '../pages/Projects.jsx'
import useScrollEffects from '../hooks/useScrollEffects.js'

function AppRoutes() {
  const location = useLocation()
  useScrollEffects(location.pathname)
  const isHome = location.pathname === '/'

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-transparent text-white">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {!isHome && <Navbar />}
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  )
}

export default AppRoutes
