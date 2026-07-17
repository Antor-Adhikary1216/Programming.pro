import { FaArrowRight, FaCloudArrowUp, FaDatabase, FaDisplay, FaServer } from 'react-icons/fa6'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const layers = [
  { icon: FaDisplay, title: 'Product interface', text: 'Responsive, accessible React experiences with a clear component system.' },
  { icon: FaServer, title: 'Application API', text: 'Express services with validation, authentication, and predictable REST contracts.' },
  { icon: FaDatabase, title: 'Data layer', text: 'MongoDB schemas and queries shaped around real product behavior.' },
  { icon: FaCloudArrowUp, title: 'Delivery', text: 'Environment-aware builds, deployment setup, and end-to-end verification.' },
]

function AboutPreview() {
  return (
    <section id="stack" className="bg-cream py-24 text-canvas sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div data-reveal="left" className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle
              eyebrow="End-to-end thinking"
              title="Full stack means owning the handoffs."
              description="A product is only as strong as the connections between its interface, business logic, data, and delivery. I work across all four."
              tone="light"
            />
            <Button to="/about" variant="dark" className="mt-8">
              How I work <FaArrowRight aria-hidden="true" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {layers.map(({ icon: Icon, title, text }, index) => (
              <article key={title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className="group rounded-3xl border border-canvas/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-canvas/20 hover:shadow-[0_20px_50px_rgba(6,16,13,0.08)] sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-canvas text-lg text-lime transition group-hover:rotate-3">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutPreview
