import AboutPreview from '../components/home/AboutPreview.jsx'
import Contact from '../components/home/Contact.jsx'
import Experience from '../components/home/Experience.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Hero from '../components/home/Hero.jsx'
import Skills from '../components/home/Skills.jsx'

function Home() {
  return (
    <div id="top" className="overflow-clip bg-canvas text-white">
      <Hero />
      <AboutPreview />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
