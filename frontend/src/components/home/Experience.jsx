import Container from '../common/Container.jsx'

const steps = [
  ['Listen', 'Understand the user, business goal, and constraints before choosing tools.'],
  ['Shape', 'Turn the idea into a clear flow, interface, API boundary, and data model.'],
  ['Build', 'Create working features across the stack in small, understandable slices.'],
  ['Verify', 'Check responsive behavior, errors, data flow, and the production build.'],
]

function Experience() {
  return (
    <section className="bg-[#171717] py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 data-reveal className="text-balance font-editorial text-[clamp(3.7rem,7vw,7.4rem)] font-semibold leading-[0.8] tracking-[-0.055em]">
            A calm process for
            <em className="block font-medium text-[#86a2ff]">complicated products.</em>
          </h2>
          <p data-reveal className="max-w-lg text-base font-medium leading-8 text-white/55 lg:justify-self-end">
            You always know what is being built, why it matters, and what comes next. Clear communication is part of the engineering.
          </p>
        </div>

        <div className="mt-16 grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <article key={title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className="border-b border-white/15 py-8 sm:border-r sm:px-6 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <span className="text-xs font-bold text-[#86a2ff]">0{index + 1}</span>
              <h3 className="mt-10 font-editorial text-3xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-white/50">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
