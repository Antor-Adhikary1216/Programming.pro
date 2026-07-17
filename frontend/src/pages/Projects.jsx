import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Container from '../components/common/Container.jsx'
import PageHero from '../components/common/PageHero.jsx'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <div id="top" className="bg-canvas">
      <PageHero
        eyebrow="Selected work"
        title="Full-stack products, designed as connected systems."
        description="Each project brings interface decisions, server behavior, data structure, and delivery into one clear product experience."
      />

      <section className="bg-cream py-20 text-canvas sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.slug} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className="group overflow-hidden rounded-3xl border border-canvas/10 bg-white">
                <div className="relative h-56 overflow-hidden bg-canvas p-7 text-white">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  <div className="dot-grid absolute inset-0 opacity-30" />
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="w-fit rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-mint">
                      {project.category}
                    </span>
                    <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">{project.title}</h2>
                  </div>
                </div>
                <div className="p-7">
                  <p className="leading-7 text-slate-600">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span key={technology} className="rounded-lg bg-canvas/5 px-3 py-1.5 text-[11px] font-semibold text-slate-600">{technology}</span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold text-canvas transition group-hover:gap-3 group-hover:text-emerald-700">
                    Read the case study <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Projects
