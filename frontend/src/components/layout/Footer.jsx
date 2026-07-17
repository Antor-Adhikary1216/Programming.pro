import { FaArrowUp, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import Container from '../common/Container.jsx'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-canvas py-10 text-white">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">From interface to infrastructure.</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Full-stack products built with clear systems, useful feedback, and dependable delivery.
          </p>
          <p className="mt-6 text-xs text-slate-600">© {new Date().getFullYear()} Programming.pro</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-mint/50 hover:bg-mint/10 hover:text-mint">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-mint/50 hover:bg-mint/10 hover:text-mint">
            <FaLinkedinIn />
          </a>
          <a href="#top" aria-label="Back to top" className="grid size-11 place-items-center rounded-xl bg-lime text-canvas transition hover:-translate-y-1">
            <FaArrowUp />
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
