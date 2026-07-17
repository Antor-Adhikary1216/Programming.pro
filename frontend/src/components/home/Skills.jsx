import { FaCloud, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa6'
import Container from '../common/Container.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

const groups = [
  {
    icon: FaReact,
    number: '01',
    title: 'Frontend',
    description: 'Interfaces that are responsive, accessible, and satisfying to use.',
    skills: ['React', 'React Router', 'Tailwind CSS', 'JavaScript', 'Design systems'],
  },
  {
    icon: FaNodeJs,
    number: '02',
    title: 'Backend',
    description: 'APIs and application logic that stay understandable as features grow.',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT auth', 'Validation'],
  },
  {
    icon: FaDatabase,
    number: '03',
    title: 'Data & delivery',
    description: 'Reliable persistence and environment setup from local work to production.',
    skills: ['MongoDB Atlas', 'Mongoose', 'Git', 'Cloud deploys', 'Environment config'],
  },
]

function Skills() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div className="ambient-orb absolute -left-40 top-20 size-[420px] rounded-full bg-mint/8 blur-[120px]" />
      <Container className="relative">
        <div data-reveal>
          <SectionTitle
            eyebrow="Full-stack toolkit"
            title="One product. Three connected layers."
            description="A focused set of tools for building complete, maintainable web applications."
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {groups.map(({ icon: Icon, number, title, description, skills }, index) => (
            <article key={title} data-reveal style={{ '--reveal-delay': `${index * 100}ms` }} className="rounded-3xl border border-white/10 bg-panel/65 p-7 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-mint/20 bg-mint/8 text-xl text-mint"><Icon /></span>
                <span className="font-display text-xs text-slate-600">{number}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/8 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-lime/20 bg-lime/5 px-5 py-4 text-sm text-slate-300">
          <FaCloud className="shrink-0 text-lime" aria-hidden="true" />
          The exact stack changes. Clear architecture and dependable delivery do not.
        </div>
      </Container>
    </section>
  )
}

export default Skills
