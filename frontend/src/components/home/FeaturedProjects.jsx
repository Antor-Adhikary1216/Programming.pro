import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { ArrowRightIcon, ArrowUpRightIcon } from '../common/Icons.jsx'
import Container from '../common/Container.jsx'

const cardLayouts = [
  'lg:col-span-7 lg:min-h-[35rem]',
  'lg:col-span-5 lg:min-h-[35rem]',
  'lg:col-span-5 lg:min-h-[30rem]',
  'lg:col-span-7 lg:min-h-[30rem]',
]

function FeaturedProjects() {
  return (
    <section className="bg-transparent py-28 text-white sm:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal className="max-w-[55rem]">
            <p className="section-kicker">Selected product work</p>
            <h2 className="text-balance mt-6 text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
              Built to work <span className="text-lime">beyond the mockup.</span>
            </h2>
          </div>
          <p data-reveal="right" className="max-w-[35ch] text-sm font-medium leading-7 text-white/56 lg:pb-2">
            Real interfaces, backend decisions, and operational details brought into one product experience.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          {projects.slice(0, 4).map((project, index) => (
            <NavLink
              key={project.slug}
              to={`/projects/${project.slug}`}
              data-reveal="scale"
              style={{ '--reveal-delay': `${index * 60}ms` }}
              className={`bezel-shell project-shell group relative min-h-[28rem] p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${cardLayouts[index]}`}
            >
              <article className="project-card relative flex h-full min-h-[inherit] overflow-hidden rounded-[calc(1.65rem-0.375rem)] p-7 sm:p-9">
                <div className={`project-surface project-surface-${index} absolute inset-0`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,12,0.03)_10%,rgba(7,16,12,0.2)_42%,rgba(7,16,12,0.96)_100%)]" aria-hidden="true" />

                <div className="absolute left-7 top-7 flex items-center gap-2 font-mono text-[9px] font-medium text-white/48 sm:left-9 sm:top-9">
                  <span className="size-1.5 rounded-full bg-lime/80" />
                  CASE STUDY 0{index + 1}
                </div>

                <div className="relative mt-auto flex w-full items-end justify-between gap-5">
                  <div>
                    <p className="font-mono text-[9px] font-medium text-lime">{project.category}</p>
                    <h3 className="mt-3 text-balance text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-sm font-medium leading-6 text-white/64">{project.summary}</p>
                    <p className="mt-5 max-w-[52ch] font-mono text-[9px] font-medium leading-5 text-white/42">
                      {project.stack.slice(0, 4).join('  /  ')}
                    </p>
                  </div>
                  <span className="project-arrow grid size-12 shrink-0 place-items-center rounded-[0.9rem] text-white">
                    <ArrowUpRightIcon className="size-[1.1rem]" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/projects"
          className="button-secondary group mt-10 inline-flex min-h-12 items-center gap-4 rounded-[0.95rem] border border-white/14 bg-white/[0.025] py-1.5 pl-5 pr-1.5 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
        >
          Explore every project
          <span className="button-icon bg-white/[0.07] text-lime">
            <ArrowRightIcon className="size-4" aria-hidden="true" />
          </span>
        </NavLink>
      </Container>
    </section>
  )
}

export default FeaturedProjects
