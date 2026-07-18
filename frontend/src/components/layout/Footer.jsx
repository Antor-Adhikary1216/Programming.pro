import { NavLink } from 'react-router-dom'
import { GithubIcon, LinkedinIcon, MailIcon } from '../common/Icons.jsx'
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
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antor-adhikary',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:antoradhikari1612@gmail.com',
    icon: MailIcon,
  },
]

function Footer() {
  return (
    <footer className="bg-canvas pb-10 pt-6 text-white sm:pb-12">
      <Container>
        <div className="footer-surface rounded-[1.35rem] px-6 py-8 sm:px-8 sm:py-9">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xl font-bold tracking-[-0.04em]">Programming.pro</p>
              <p className="mt-3 max-w-[43ch] text-sm font-medium leading-6 text-white/52">
                Full-stack products shaped with clear interfaces, dependable systems, and motion that earns its place.
              </p>
            </div>

            <div className="flex items-center gap-2 md:justify-end">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="footer-icon grid size-11 place-items-center rounded-[0.9rem] text-white/58 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <Icon className="size-[1.05rem]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-6 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="footer-link text-sm font-semibold text-white/48">
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <p className="font-mono text-[9px] font-medium text-white/30">
              &copy; {new Date().getFullYear()} Programming.pro · Built with intent
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
