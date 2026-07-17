import { FaArrowDown, FaArrowRight, FaCheck } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import portrait from '../../assets/profile-portrait.jpeg'
import Container from '../common/Container.jsx'

const capabilities = ['React interfaces', 'Node.js APIs', 'MongoDB systems']

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3efe6] text-[#171717]">
      <div className="absolute -right-32 top-28 size-96 rounded-full bg-[#2f5cff]/10 blur-[100px]" />

      <Container className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/15 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
          <span>Antor Adhikari / Full-stack developer</span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#2f5cff]" />
            Available for new projects
          </span>
        </div>

        <div className="grid min-h-[calc(100svh-118px)] items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div className="max-w-4xl">
            <p data-reveal className="text-sm font-bold uppercase tracking-[0.22em] text-[#2f5cff]">
              Clear thinking. Complete execution.
            </p>
            <h1
              data-reveal
              style={{ '--reveal-delay': '80ms' }}
              className="text-balance mt-6 font-editorial text-[clamp(4.3rem,9.5vw,9.2rem)] font-semibold leading-[0.78] tracking-[-0.065em]"
            >
              I turn ideas into
              <em className="block font-medium text-[#2f5cff]">complete web products.</em>
            </h1>
            <p
              data-reveal
              style={{ '--reveal-delay': '160ms' }}
              className="mt-8 max-w-2xl text-base font-medium leading-8 text-black/65 sm:text-lg"
            >
              I&apos;m Antor, a full-stack developer building the interface people use, the API behind it,
              and the database that keeps everything working together.
            </p>

            <div data-reveal style={{ '--reveal-delay': '240ms' }} className="mt-10 flex flex-wrap gap-3">
              <NavLink
                to="/projects"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-[#171717] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2f5cff]"
              >
                Explore my work <FaArrowRight aria-hidden="true" />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex h-12 items-center rounded-full border border-black/25 px-6 text-sm font-bold transition hover:border-black hover:bg-white/50"
              >
                Discuss a project
              </NavLink>
            </div>
          </div>

          <div data-reveal="right" style={{ '--reveal-delay': '160ms' }} className="relative mx-auto w-full max-w-[410px] lg:ml-auto">
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] bg-[#2f5cff]" />
            <figure className="relative overflow-hidden rounded-[2rem] bg-[#171717] p-2 shadow-[0_28px_70px_rgba(23,23,23,0.18)]">
              <img
                src={portrait}
                alt="Antor Adhikari, full-stack web developer"
                className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-[center_24%] grayscale-[0.15]"
              />
              <figcaption className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#f3efe6]/95 p-4 backdrop-blur">
                <p className="font-editorial text-2xl font-semibold leading-none">Built across every layer.</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-black/55">
                  One developer connecting product design, frontend, backend, and data.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div id="services" className="grid border-y border-black/15 sm:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability} className="flex items-center gap-3 border-black/15 px-1 py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
              <FaCheck className="text-xs text-[#2f5cff]" aria-hidden="true" />
              <span className="text-sm font-bold">{capability}</span>
            </div>
          ))}
        </div>

        <a href="#services" className="sr-only">
          <FaArrowDown aria-hidden="true" /> Explore services
        </a>
      </Container>
    </section>
  )
}

export default Hero
