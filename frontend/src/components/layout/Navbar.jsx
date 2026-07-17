import { useEffect, useState } from 'react'
import { FaArrowRight, FaBars, FaDownload, FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import programmingProLogo from '../../assets/programming-pro-logo.png'
import Container from '../common/Container.jsx'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 ${
      isActive
        ? 'bg-lime text-canvas shadow-[0_8px_24px_rgba(199,255,104,0.12)]'
        : 'text-slate-400 hover:bg-white/6 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 bg-canvas/75 py-3 backdrop-blur-xl">
      <Container>
        <nav
          className={`flex h-16 items-center gap-3 rounded-2xl border px-3 transition duration-300 sm:px-4 ${
            isScrolled
              ? 'border-mint/20 bg-panel/90 shadow-[0_18px_50px_rgba(0,0,0,0.28)]'
              : 'border-white/10 bg-panel/72 shadow-[0_12px_40px_rgba(0,0,0,0.18)]'
          }`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className="group flex min-w-0 items-center gap-3 text-white"
            aria-label="Programming.pro home"
          >
            <span className="relative size-11 shrink-0 overflow-hidden rounded-xl border border-sky-400/25 bg-[#15151c] shadow-[0_8px_22px_rgba(56,174,246,0.12)] transition duration-300 group-hover:-rotate-2 group-hover:border-sky-400/60">
              <img
                src={programmingProLogo}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-[70%] w-[132px] max-w-none -translate-x-1/2 -translate-y-1/2 transition duration-500 group-hover:scale-105"
              />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-display text-sm font-semibold tracking-[-0.02em]">Programming.pro</span>
              <span className="mt-0.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-slate-500">
                <span className="size-1.5 rounded-full bg-sky-400" />
                Full-stack systems
              </span>
            </span>
          </NavLink>

          <div className="mx-auto hidden items-center gap-1 rounded-2xl border border-white/8 bg-canvas/55 p-1 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a
              href="/resume.pdf"
              download="Antor-Adhikari-Resume.pdf"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:bg-mint/10 hover:text-mint sm:px-4"
              aria-label="Download Resume"
            >
              <FaDownload aria-hidden="true" />
              <span className="hidden sm:inline">Download Resume</span>
            </a>

            <NavLink
              to="/contact"
              className="hidden h-11 items-center gap-2 rounded-xl bg-lime px-4 text-xs font-bold text-canvas transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8ff91] lg:inline-flex"
            >
              Let&apos;s talk <FaArrowRight aria-hidden="true" />
            </NavLink>

            <button
              type="button"
              onClick={() => setIsOpen((currentState) => !currentState)}
              className="grid size-11 place-items-center rounded-xl border border-white/12 bg-white/5 text-white transition hover:border-mint/50 hover:text-mint lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="mt-2 grid gap-1 rounded-2xl border border-white/10 bg-panel/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:hidden">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-4 py-3 text-sm font-bold text-canvas"
            >
              Start a project <FaArrowRight aria-hidden="true" />
            </NavLink>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar
