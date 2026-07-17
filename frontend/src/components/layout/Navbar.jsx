import { useState } from 'react'
import { FaBars, FaDownload, FaGithub, FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import programmingProLogo from '../../assets/programming-pro-logo.png'
import Container from '../common/Container.jsx'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

const linkClass = ({ isActive }) =>
  `text-sm font-semibold tracking-[-0.01em] transition duration-200 ${
    isActive ? 'text-white' : 'text-white/45 hover:text-white'
  }`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[76px] items-center gap-4" aria-label="Main navigation">
          <NavLink
            to="/"
            className="group flex min-w-0 items-center gap-3 text-white"
            aria-label="Programming.pro home"
          >
            <span className="relative size-10 shrink-0 overflow-hidden rounded-lg bg-[#15151c]">
              <img
                src={programmingProLogo}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-[70%] w-[120px] max-w-none -translate-x-1/2 -translate-y-1/2 transition duration-300 group-hover:scale-105"
              />
            </span>
            <span className="hidden truncate text-base font-semibold tracking-[-0.02em] sm:block">
              Programming.pro
            </span>
          </NavLink>

          <div className="mx-auto hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
            <a
              href="https://github.com/Antor-Adhikary1216"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white xl:inline-flex"
              aria-label="Open GitHub profile"
            >
              <FaGithub className="text-lg" aria-hidden="true" />
              GitHub
            </a>

            <NavLink
              to="/contact"
              className="hidden h-10 items-center justify-center rounded-full border border-white/55 bg-white/[0.03] px-5 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition duration-200 hover:border-white hover:bg-white/10 md:inline-flex"
            >
              Contact
            </NavLink>

            <a
              href="/resume.pdf"
              download="Antor-Adhikari-Resume.pdf"
              className="hidden h-10 items-center justify-center rounded-full bg-gradient-to-b from-sky-300 to-sky-500 px-5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,189,248,0.28),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-200 hover:brightness-110 sm:inline-flex"
            >
              <FaDownload className="mr-2" aria-hidden="true" />
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              download="Antor-Adhikari-Resume.pdf"
              className="grid size-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-white/50 hover:text-white sm:hidden"
              aria-label="Download Resume"
            >
              <FaDownload aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((currentState) => !currentState)}
              className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/98 lg:hidden">
          <Container className="grid gap-1 py-3">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-white/55 hover:bg-white/5 hover:text-white'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/Antor-Adhikary1216"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white/55 transition hover:bg-white/5 hover:text-white"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-white/55 transition hover:bg-white/5 hover:text-white"
            >
              Contact
            </NavLink>
            <a
              href="/resume.pdf"
              download="Antor-Adhikari-Resume.pdf"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-white"
            >
              <FaDownload className="mr-2" aria-hidden="true" />
              Download Resume
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Navbar
