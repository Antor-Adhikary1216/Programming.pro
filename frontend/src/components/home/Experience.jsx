import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const process = [
  ['Understand', 'Map users, product goals, data, and technical constraints before choosing tools.'],
  ['Design the system', 'Shape the interface, API boundaries, schema, and state transitions together.'],
  ['Build in slices', 'Deliver working vertical features instead of disconnected frontend and backend pieces.'],
  ['Verify and ship', 'Check responsive behavior, errors, security boundaries, builds, and deployment.'],
]

function Experience() {
  return (
    <section className="border-y border-white/8 bg-panel py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal="left">
            <SectionTitle
              eyebrow="Build process"
              title="From idea to reliable product."
              description="A simple process that keeps design decisions and engineering decisions connected."
            />
          </div>

          <div className="space-y-3">
            {process.map(([title, description], index) => (
              <article key={title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className="group grid gap-4 rounded-2xl border border-white/8 bg-canvas/45 p-5 transition hover:border-mint/25 sm:grid-cols-[42px_1fr_24px] sm:items-start sm:p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-lime text-xs font-bold text-canvas">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </div>
                {index === process.length - 1 ? <FaCheck className="mt-2 text-lime" /> : <FaArrowRight className="mt-2 text-slate-600 transition group-hover:translate-x-1 group-hover:text-mint" />}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience
