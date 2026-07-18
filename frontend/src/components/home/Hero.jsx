import { NavLink } from 'react-router-dom'
import portrait from '../../assets/profile-portrait.jpeg'
import { ArrowRightIcon, DownloadIcon } from '../common/Icons.jsx'
import Container from '../common/Container.jsx'

const capabilities = [
  ['Interface', 'React systems with a clear visual hierarchy.'],
  ['Services', 'Express APIs with explicit, useful contracts.'],
  ['Data', 'MongoDB models shaped around real workflows.'],
  ['Delivery', 'One connected path from idea to production.'],
]

function Hero() {
  return (
    <>
      <section className="hero-shell relative isolate overflow-hidden bg-transparent pb-16 pt-28 text-white sm:pb-20 sm:pt-24 lg:min-h-[100dvh] lg:pb-8">
        <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="hero-vignette absolute inset-0" aria-hidden="true" />

        <Container className="relative">
          <div data-reveal className="hero-status-row flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold text-white/58">
              <span className="availability-dot" aria-hidden="true" />
              Available for selected projects
            </p>
            <p className="font-mono text-[10px] font-medium text-white/38">Kolkata · India · Remote</p>
          </div>

          <div className="grid items-center gap-12 py-12 lg:grid-cols-[0.93fr_1.07fr] lg:gap-10 lg:py-8">
            <div className="relative z-10 max-w-[43rem]">
              <p data-reveal className="section-kicker">
                Full-stack design engineer
              </p>
              <h1
                data-reveal
                style={{ '--reveal-delay': '55ms' }}
                className="text-balance mt-5 text-[clamp(3.55rem,5vw,5.7rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
              >
                I design interfaces. <span className="text-lime">I engineer systems.</span>
              </h1>
              <p
                data-reveal
                style={{ '--reveal-delay': '110ms' }}
                className="mt-6 max-w-[53ch] text-base font-medium leading-7 text-white/66 sm:text-lg sm:leading-8"
              >
                Product-minded React interfaces, dependable APIs, and purposeful motion built as one coherent experience.
              </p>

              <div data-reveal style={{ '--reveal-delay': '165ms' }} className="mt-7 flex flex-wrap gap-3">
                <NavLink
                  to="/projects"
                  className="button-primary group inline-flex min-h-13 items-center gap-4 rounded-[0.95rem] bg-lime py-1.5 pl-5 pr-1.5 text-sm font-bold text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  View selected work
                  <span className="button-icon bg-canvas text-lime">
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                  </span>
                </NavLink>
                <a
                  href="/resume.pdf"
                  download="Antor-Adhikari-Resume.pdf"
                  className="button-secondary group inline-flex min-h-13 items-center gap-3 rounded-[0.95rem] border border-white/14 bg-white/[0.04] px-5 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <DownloadIcon className="size-4 text-white/58" aria-hidden="true" />
                  Download résumé
                </a>
              </div>
            </div>

            <div data-reveal="scale" style={{ '--reveal-delay': '90ms' }} className="bezel-shell hero-portrait-frame relative min-h-[29rem] lg:min-h-[39rem]">
              <div className="bezel-core editorial-portrait-stage absolute inset-1.5 overflow-hidden rounded-[calc(1.8rem-0.375rem)]">
                <img
                  src={portrait}
                  alt="Antor Adhikari, full-stack developer"
                  className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
                />
                <div className="portrait-wash absolute inset-0" aria-hidden="true" />

                <div className="absolute left-5 top-5 font-mono text-[9px] font-medium text-cream/72 sm:left-6 sm:top-6">
                  PORTRAIT / 2026
                </div>

                <div className="portrait-caption absolute bottom-5 left-5 right-5 rounded-[1rem] p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] text-lime">Antor Adhikari</p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-cream">Design-minded engineering</p>
                    </div>
                    <p className="font-mono text-[9px] leading-5 text-cream/58">React · Node.js · MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="capability-rail bg-transparent text-white" aria-label="Core capabilities">
        <Container>
          <div className="bezel-shell rounded-[1.35rem] p-1">
            <div className="grid overflow-hidden rounded-[1.05rem] bg-panel md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map(([title, description], index) => (
                <article key={title} className="capability-cell relative p-6 sm:p-7">
                  <span className="font-mono text-[9px] font-medium text-lime/72">0{index + 1}</span>
                  <h2 className="mt-5 text-base font-bold tracking-[-0.025em] text-white">{title}</h2>
                  <p className="mt-2 max-w-[29ch] text-xs font-medium leading-5 text-white/54">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
