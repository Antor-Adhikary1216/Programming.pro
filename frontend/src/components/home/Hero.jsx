import { FaArrowDown, FaArrowRight, FaCheck, FaDatabase, FaServer } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa'
import portrait from '../../assets/profile-portrait.jpeg'
import AnimatedBackground from '../common/AnimatedBackground.jsx'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'

const tickerItems = ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment']

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-canvas">
      <AnimatedBackground />

      <Container className="relative z-10 grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
        <div className="max-w-3xl">
          <div data-reveal className="mb-7 inline-flex items-center gap-3 rounded-full border border-mint/20 bg-mint/5 px-4 py-2 text-xs font-semibold text-mint backdrop-blur">
            <span className="size-2 rounded-full bg-lime shadow-[0_0_16px_rgba(199,255,104,0.8)]" />
            Available for full-stack projects
          </div>

          <h1 data-reveal style={{ '--reveal-delay': '80ms' }} className="text-balance font-display text-[clamp(3.3rem,7.7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
            I build the
            <span className="block text-lime">whole product.</span>
          </h1>

          <p data-reveal style={{ '--reveal-delay': '160ms' }} className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            From responsive React interfaces to secure APIs, data models, and deployment—I turn ideas into complete web products that are ready to use.
          </p>

          <div data-reveal style={{ '--reveal-delay': '240ms' }} className="mt-9 flex flex-wrap gap-3">
            <Button to="/projects">
              See full-stack work <FaArrowRight aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary">
              Start a project
            </Button>
          </div>

          <a href="#stack" className="mt-12 hidden w-fit items-center gap-3 text-xs font-semibold text-slate-500 transition hover:text-mint sm:flex">
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5">
              <FaArrowDown className="text-[10px]" aria-hidden="true" />
            </span>
            Explore the stack
          </a>
        </div>

        <div data-reveal="right" style={{ '--reveal-delay': '180ms' }} className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
          <div className="absolute -inset-12 rounded-full bg-mint/10 blur-[90px]" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-panel/75 p-2 shadow-[0_32px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.35rem] bg-panel-soft">
              <img src={portrait} alt="Full-stack developer portrait" className="h-full w-full object-cover object-[center_24%] saturate-[0.85]" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-mint/5" />
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/12 bg-canvas/82 p-4 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-lime">Product stack</p>
                <span className="flex items-center gap-1.5 text-[10px] text-mint"><FaCheck /> Connected</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  [FaReact, 'Interface', 'React'],
                  [FaServer, 'API', 'Express'],
                  [FaDatabase, 'Data', 'MongoDB'],
                ].map(([Icon, label, technology]) => (
                  <div key={label} className="rounded-xl border border-white/8 bg-white/5 p-3">
                    <Icon className="text-mint" aria-hidden="true" />
                    <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-slate-500">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-white">{technology}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-10 overflow-hidden border-y border-white/8 bg-canvas/72 py-4 backdrop-blur-xl">
        <div className="stack-ticker flex items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-7 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item}</span>
              <span className="size-1.5 rounded-full bg-lime" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
