import { FaArrowRight } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Container from '../common/Container.jsx'

function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#2f5cff] py-24 text-white sm:py-32">
      <div className="absolute -bottom-28 -right-20 font-editorial text-[22rem] font-semibold leading-none text-white/[0.06]" aria-hidden="true">
        P.
      </div>
      <Container className="relative">
        <p data-reveal className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Have a project in mind?</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 data-reveal className="text-balance max-w-5xl font-editorial text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.78] tracking-[-0.06em]">
            Let&apos;s make it
            <em className="block font-medium text-[#dfe7ff]">clear, useful, and real.</em>
          </h2>
          <NavLink
            to="/contact"
            className="inline-flex h-14 w-fit shrink-0 items-center gap-4 rounded-full bg-white px-7 text-sm font-bold text-[#171717] transition hover:-translate-y-1 hover:bg-[#dfe7ff]"
          >
            Start a conversation <FaArrowRight aria-hidden="true" />
          </NavLink>
        </div>
      </Container>
    </section>
  )
}

export default Contact
