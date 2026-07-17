import Container from '../common/Container.jsx'

const skillGroups = [
  ['Frontend', 'React, React Router, JavaScript, Tailwind CSS, responsive UI'],
  ['Backend', 'Node.js, Express, REST APIs, validation, error handling'],
  ['Data & delivery', 'MongoDB Atlas, native MongoDB driver, Git, environment configuration'],
]

function Skills() {
  return (
    <section className="bg-[#f3efe6] py-24 text-[#171717] sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal="left" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2f5cff]">Technical toolkit</p>
            <h2 className="text-balance mt-6 max-w-xl font-editorial text-[clamp(3.5rem,6vw,6.2rem)] font-semibold leading-[0.84] tracking-[-0.05em]">
              The tools serve
              <em className="block font-medium text-[#2f5cff]">the product.</em>
            </h2>
            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-black/55 sm:text-base">
              I choose technologies for clarity, maintainability, and the experience they help create—not for the longest tool list.
            </p>
          </div>

          <div className="border-t border-black/20">
            {skillGroups.map(([title, skills], index) => (
              <article
                key={title}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
                className="grid gap-5 border-b border-black/20 py-8 sm:grid-cols-[52px_180px_1fr] sm:items-start"
              >
                <span className="text-xs font-bold text-black/35">0{index + 1}</span>
                <h3 className="font-editorial text-3xl font-semibold leading-none">{title}</h3>
                <p className="text-sm font-semibold leading-7 text-black/55">{skills}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
