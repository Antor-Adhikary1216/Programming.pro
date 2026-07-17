import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../../data/projects.js'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function FeaturedProjects() {
  return (
    <section className="bg-cream py-24 text-canvas sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <SectionTitle
              eyebrow="Selected systems"
              title="Projects shaped across the whole stack."
              description="Product interfaces, APIs, data models, and operational tools designed as one system."
              tone="light"
            />
          </div>
          <Button to="/projects" variant="dark" className="w-fit shrink-0">
            View every project <FaArrowRight aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.slug} data-reveal="scale" style={{ '--reveal-delay': `${index * 90}ms` }} className={`group relative overflow-hidden rounded-3xl border border-canvas/10 bg-canvas p-7 text-white sm:p-9 ${index === 2 ? 'lg:col-span-2' : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              <div className="dot-grid absolute inset-0 opacity-25" />
              <div className="relative flex min-h-[330px] flex-col justify-between">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">{project.category}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{project.title}</h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5 text-sm transition group-hover:border-lime group-hover:bg-lime group-hover:text-canvas">
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </span>
                </div>

                <div>
                  <p className="max-w-xl leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span key={technology} className="rounded-lg border border-white/10 bg-canvas/30 px-3 py-1.5 text-[11px] font-semibold text-slate-300 backdrop-blur">{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjects
