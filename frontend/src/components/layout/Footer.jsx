import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Container from '../common/Container.jsx'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Antor-Adhikary1216',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antor-adhikary',
    icon: FaLinkedinIn,
  },
  {
    label: 'Email',
    href: 'mailto:antoradhikari1612@gmail.com',
    icon: FaEnvelope,
  },
]

function Footer() {
  return (
    <footer className="overflow-hidden bg-[#080a0f] text-white">
      <Container className="flex min-h-[22rem] flex-col items-center justify-center py-20 text-center sm:min-h-[28rem]">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-400">
          Have a project in mind?
        </p>
        <h2 className="text-balance mt-5 max-w-5xl font-editorial text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.78] tracking-[-0.055em]">
          Let&apos;s build something useful.
        </h2>
        <a
          href="mailto:antoradhikari1612@gmail.com"
          className="mt-9 inline-flex items-center gap-2 border-b border-white/50 pb-2 text-sm font-bold transition-colors hover:border-sky-400 hover:text-sky-300"
        >
          Start a conversation <FaEnvelope aria-hidden="true" />
        </a>
      </Container>

      <div className="relative mt-16 bg-[#2463eb] pb-10 pt-24 sm:pb-12 sm:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full overflow-hidden sm:h-32">
          <div className="footer-wave footer-wave-back absolute -bottom-14 left-[-12%] h-28 w-[124%] rounded-[50%] bg-[#182c55] sm:-bottom-16 sm:h-36" />
          <div className="footer-wave footer-wave-middle absolute -bottom-16 left-[-14%] h-28 w-[128%] rounded-[48%] bg-[#2452a5] sm:-bottom-20 sm:h-40" />
          <div className="footer-wave footer-wave-front absolute -bottom-20 left-[-10%] h-32 w-[120%] rounded-[50%] bg-[#2463eb] sm:-bottom-24 sm:h-44" />
        </div>

        <Container className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/25 bg-white/10 text-lg transition hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#1749b6]"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>

          <nav aria-label="Footer navigation" className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-blue-100 transition-colors hover:text-white"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href="mailto:antoradhikari1612@gmail.com"
            className="mt-7 text-sm font-medium text-blue-100 transition-colors hover:text-white"
          >
            antoradhikari1612@gmail.com
          </a>

          <div className="mt-8 h-px w-full max-w-xl bg-white/20" />
          <p className="mt-6 text-xs font-medium text-blue-100">
            &copy; {new Date().getFullYear()} Programming.pro. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
