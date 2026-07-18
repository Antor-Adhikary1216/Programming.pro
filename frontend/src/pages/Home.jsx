import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGmail,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import portrait from '../assets/profile-portrait.jpeg'
import mountainHeader from '../assets/portfolio-mountain-header.png'
import projectImageOne from '../assets/portfolio-project-1.png'
import projectImageTwo from '../assets/portfolio-project-2.png'
import projectImageThree from '../assets/portfolio-project-3.png'
import logo from '../assets/programming-pro-logo.png'
import { projects } from '../data/projects.js'
import { sendContactMessage } from '../services/contactApi.js'

const services = [
  {
    title: 'Design',
    copy: 'I shape clear interfaces around the product goal, user journey, and real content before decoration enters the work.',
  },
  {
    title: 'Development',
    copy: 'I build responsive React products, useful API layers, and reliable data flows that stay understandable as they grow.',
  },
  {
    title: 'Maintenance',
    copy: 'I improve existing products with focused fixes, new features, accessibility work, and practical performance tuning.',
  },
]

const skills = [
  { label: 'React', icon: SiReact },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'Tailwind CSS', icon: SiTailwindcss },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Express', icon: SiExpress },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'Firebase', icon: SiFirebase },
  { label: 'Git', icon: SiGit },
  { label: 'Figma', icon: SiFigma },
]

const projectImages = [projectImageOne, projectImageTwo, projectImageThree, projectImageOne]
const initialForm = { name: '', email: '', message: '' }

function SectionHeading({ children, light = false }) {
  return (
    <div className={`reference-heading ${light ? 'reference-heading-light' : ''}`}>
      <h2>{children}</h2>
    </div>
  )
}

function Home() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setFeedback({ type: '', message: '' })

    try {
      await sendContactMessage(form)
      setForm(initialForm)
      setFeedback({ type: 'success', message: 'Your message was sent successfully.' })
    } catch (error) {
      setFeedback({ type: 'error', message: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div id="top" className="reference-home">
      <header className="reference-hero" id="home">
        <nav className="reference-nav" aria-label="Home navigation">
          <a href="#home" className="reference-logo" aria-label="Back to top">
            <img src={logo} alt="" aria-hidden="true" />
          </a>
          <div className="reference-nav-links">
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact" className="reference-nav-cta">Contact me</a>
          </div>
        </nav>

        <div className="reference-hero-copy" data-reveal>
          <p>Hi, I am</p>
          <h1>Antor Adhikari</h1>
          <span>Full-stack Developer / UI Designer</span>
          <div className="reference-socials" aria-label="Social profiles">
            <a href="mailto:antoradhikari1612@gmail.com" aria-label="Email Antor"><SiGmail /></a>
            <a href="https://github.com/Antor-Adhikary1216" target="_blank" rel="noreferrer" aria-label="GitHub profile"><SiGithub /></a>
            <a href="https://www.linkedin.com/in/antor-adhikary" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><span className="reference-linkedin-mark" aria-hidden="true">in</span></a>
          </div>
        </div>

        <div className="reference-hero-dark" aria-hidden="true" />
        <div className="reference-portrait-wrap">
          <img src={portrait} alt="Antor Adhikari" />
        </div>
      </header>

      <section className="reference-intro-strip">
        <div data-reveal>
          <h2>PROGRAMMING.PRO</h2>
          <p>
            I connect product design, React interfaces, backend services, and data models into one coherent build. The result is clear to use and practical to maintain.
          </p>
          <Link to="/about" className="reference-line-link">Read more</Link>
        </div>
        <span className="reference-intro-mark" aria-hidden="true">IT</span>
      </section>

      <section id="about" className="reference-about reference-paper">
        <SectionHeading>About me</SectionHeading>
        <p className="reference-about-copy" data-reveal>
          I am a full-stack developer who enjoys turning rough ideas into focused digital products. My work combines interface design, responsive frontend engineering, API development, and dependable data architecture.
        </p>
        <Link to="/about" className="reference-line-link reference-line-link-dark">Explore</Link>

        <div className="reference-divider" aria-hidden="true" />

        <div className="reference-services">
          {services.map((service, index) => (
            <article key={service.title} data-reveal style={{ '--reveal-delay': `${index * 70}ms` }}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>

        <div className="reference-divider" aria-hidden="true" />

        <div id="skills" className="reference-skills">
          <SectionHeading>Skills</SectionHeading>
          <h3>Using now</h3>
          <div className="reference-skill-grid">
            {skills.map(({ label, icon: Icon }, index) => (
              <div key={label} data-reveal style={{ '--reveal-delay': `${index * 35}ms` }}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="reference-portfolio">
        <div className="reference-portfolio-header" style={{ backgroundImage: `url(${mountainHeader})` }}>
          <SectionHeading>Portfolio</SectionHeading>
        </div>
        <div className="reference-project-filter" aria-label="Project categories">
          <span className="is-active">All</span>
          <span>Coded</span>
          <span>Designed</span>
        </div>
        <div className="reference-project-grid">
          {projects.slice(0, 4).map((project, index) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="reference-project-card" data-reveal>
              <img src={projectImages[index]} alt="" aria-hidden="true" />
              <span className="reference-project-overlay">
                <small>{project.category}</small>
                <strong>{project.title}</strong>
                <em>{project.summary}</em>
                <b>View project</b>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/projects" className="reference-all-projects">View all projects</Link>
      </section>

      <section id="contact" className="reference-contact reference-paper">
        <SectionHeading>Contact</SectionHeading>
        <p>Have a product idea or an existing build that needs a clearer direction? Send the useful details and I will get back to you.</p>

        <form onSubmit={handleSubmit} className="reference-contact-form" data-reveal>
          <label>
            <span>Your name</span>
            <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
          </label>
          <label>
            <span>Your email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
          </label>
          <label>
            <span>Your message</span>
            <textarea name="message" value={form.message} onChange={handleChange} required rows="6" />
          </label>
          {feedback.message && (
            <p className={`reference-form-feedback ${feedback.type}`}>{feedback.message}</p>
          )}
          <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Submit'}</button>
        </form>
      </section>

      <footer className="reference-footer">
        <a href="#top" className="reference-back-top">Back to top</a>
        <div className="reference-footer-socials">
          <a href="mailto:antoradhikari1612@gmail.com" aria-label="Email Antor"><SiGmail /></a>
          <a href="https://github.com/Antor-Adhikary1216" target="_blank" rel="noreferrer" aria-label="GitHub profile"><SiGithub /></a>
          <a href="https://www.linkedin.com/in/antor-adhikary" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><span className="reference-linkedin-mark" aria-hidden="true">in</span></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Antor Adhikari. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
