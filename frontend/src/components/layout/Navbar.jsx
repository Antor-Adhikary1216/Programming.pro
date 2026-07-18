import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import programmingProLogo from '../../assets/programming-pro-logo.png'
import { DownloadIcon, GithubIcon } from '../common/Icons.jsx'
import Container from '../common/Container.jsx'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

const linkClass = ({ isActive }) =>
  `nav-link relative px-1 py-2 text-sm font-semibold ${isActive ? 'is-active text-white' : 'text-white/56 hover:text-white'}`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 h-0 text-white">
      <Container className="pointer-events-none relative z-20 pt-3 sm:pt-4">
        <nav className="nav-island pointer-events-auto flex h-[3.75rem] items-center gap-3 px-2.5 sm:px-3" aria-label="Main navigation">
          <NavLink to="/" className="group flex min-w-0 items-center gap-3" aria-label="Programming.pro home">
            <span className="brand-mark relative size-10 shrink-0 overflow-hidden rounded-[0.9rem]">
              <img
                src={programmingProLogo}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-[70%] w-[118px] max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </span>
            <span className="hidden truncate text-sm font-bold tracking-[-0.025em] sm:block">Programming.pro</span>
          </NavLink>

          <div className="mx-auto hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
            <a
              href="https://github.com/Antor-Adhikary1216"
              target="_blank"
              rel="noreferrer"
              className="nav-icon-button hidden size-10 place-items-center text-white/64 sm:grid"
              aria-label="Open GitHub profile"
            >
              <GithubIcon className="size-[1.05rem]" aria-hidden="true" />
            </a>

            <a
              href="/resume.pdf"
              download="Antor-Adhikari-Resume.pdf"
              className="nav-icon-button hidden size-10 place-items-center text-white/64 md:grid"
              aria-label="Download résumé"
            >
              <DownloadIcon className="size-[1.05rem]" aria-hidden="true" />
            </a>

            <NavLink to="/contact" className="nav-contact hidden min-h-10 items-center px-4 text-sm font-bold text-canvas md:inline-flex">
              Contact
            </NavLink>

            <button
              type="button"
              onClick={() => setIsOpen((currentState) => !currentState)}
              className="menu-button relative grid size-10 place-items-center lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <span className="menu-glyph" data-open={isOpen} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
      </Container>

      <div
        id="mobile-navigation"
        className="mobile-navigation-overlay fixed inset-0 z-10 lg:hidden"
        data-open={isOpen}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mobile-navigation-material absolute inset-x-3 bottom-3 top-3 rounded-[1.75rem]" />
        <Container className="relative flex h-full flex-col pb-8 pt-28">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {[...navigation, { label: 'Contact', to: '/contact' }].map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link flex items-center justify-between py-3 text-[clamp(2.5rem,12vw,4.4rem)] font-semibold leading-none tracking-[-0.055em] ${
                    isActive ? 'text-lime' : 'text-white'
                  }`
                }
                style={{ '--menu-delay': `${80 + index * 45}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="font-mono text-xs font-medium tracking-normal text-white/36">0{index + 1}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-meta mt-auto grid gap-3 border-t border-white/10 pt-5 text-sm font-semibold text-white/58" style={{ '--menu-delay': '280ms' }}>
            <a href="https://github.com/Antor-Adhikary1216" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3">
              <GithubIcon className="size-4" aria-hidden="true" /> GitHub
            </a>
            <a href="/resume.pdf" download="Antor-Adhikari-Resume.pdf" className="inline-flex items-center gap-3">
              <DownloadIcon className="size-4" aria-hidden="true" /> Download résumé
            </a>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
