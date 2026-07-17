import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaGithub,
} from 'react-icons/fa6'
import { Link, Navigate, useParams } from 'react-router-dom'
import Container from '../components/common/Container.jsx'
import PageHero from '../components/common/PageHero.jsx'
import { findProject } from '../data/projects.js'

const defaultHighlights = [
  'Responsive product experience',
  'Validated API contracts',
  'Purposeful data model',
  'Production-aware configuration',
]

function ProjectDetails() {
  const { projectId } = useParams()
  const project = findProject(projectId)

  if (!project) return <Navigate to="/projects" replace />

  const highlights = project.highlights ?? defaultHighlights

  return (
    <div id="top" className="bg-canvas">
      <PageHero eyebrow={project.category} title={project.title} description={project.summary}>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span key={technology} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
              {technology}
            </span>
          ))}
        </div>
      </PageHero>

      {(project.liveUrl || project.repositoryUrl) && (
        <section className="pb-10 sm:pb-14">
          <Container>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-bold text-canvas transition-transform hover:-translate-y-0.5">
                  View live project <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              )}
              {project.repositoryUrl && (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15">
                  <FaGithub aria-hidden="true" /> View source
                </a>
              )}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-cream py-20 text-canvas sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div data-reveal="left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Outcome</p>
              <p className="mt-3 font-display text-2xl font-semibold">{project.result}</p>
              <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-canvas">
                <FaArrowLeft aria-hidden="true" /> Back to projects
              </Link>
            </div>

            <article data-reveal>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.045em]">
                Built as one product - not two disconnected halves.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{project.description}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-canvas/10 bg-white p-4 text-sm font-semibold">
                    <span className="grid size-8 place-items-center rounded-lg bg-lime text-canvas"><FaCheck aria-hidden="true" /></span>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ProjectDetails
