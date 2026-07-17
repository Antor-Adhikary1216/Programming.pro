import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import Container from '../common/Container.jsx'

function FeaturedProjects() {
  return (
    <section className="bg-[#dfe7ff] py-24 text-[#171717] sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2f5cff]">Selected work</p>
            <h2 className="text-balance mt-6 max-w-4xl font-editorial text-[clamp(3.6rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.055em]">
              Products with a clear reason to exist.
            </h2>
          </div>
          <NavLink to="/projects" className="inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-bold">
            View all projects <FaArrowRight aria-hidden="true" />
          </NavLink>
        </div>

        <div className="mt-16 border-t border-black/20">
          {projects.slice(0, 4).map((project, index) => (
            <NavLink
              key={project.slug}
              to={`/projects/${project.slug}`}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
              className="group grid gap-6 border-b border-black/20 py-9 transition hover:bg-white/25 sm:grid-cols-[54px_0.85fr_1.15fr_42px] sm:items-center sm:px-4"
            >
              <span className="text-xs font-bold text-black/35">0{index + 1}</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2f5cff]">{project.category}</p>
                <h3 className="mt-2 font-editorial text-3xl font-semibold leading-none sm:text-4xl">{project.title}</h3>
              </div>
              <div>
                <p className="max-w-xl text-sm font-medium leading-7 text-black/60">{project.summary}</p>
                <p className="mt-3 text-xs font-bold text-black/40">{project.stack.join(' / ')}</p>
              </div>
              <span className="grid size-10 place-items-center rounded-full border border-black/25 transition group-hover:border-[#2f5cff] group-hover:bg-[#2f5cff] group-hover:text-white">
                <FaArrowUpRightFromSquare className="text-xs" aria-hidden="true" />
              </span>
            </NavLink>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjects
