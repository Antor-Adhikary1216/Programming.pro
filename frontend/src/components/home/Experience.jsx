import Container from '../common/Container.jsx'

const steps = [
  ['Discover', 'Listen', 'Understand the user, business goal, constraints, and real definition of success before choosing tools.'],
  ['Structure', 'Shape', 'Turn the idea into a clear flow, interface hierarchy, API boundary, and data model.'],
  ['Execute', 'Build', 'Create working features across the stack in small, understandable, reviewable slices.'],
  ['Quality', 'Verify', 'Check responsive behavior, accessibility, failure paths, data flow, and the production build.'],
]

function Experience() {
  return (
    <section className="bg-transparent py-28 text-white sm:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal className="max-w-[57rem]">
            <p className="section-kicker">How the work moves</p>
            <h2 className="text-balance mt-6 text-[clamp(3.2rem,6vw,6.3rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
              Calm process. <span className="text-white/52">Complicated builds.</span>
            </h2>
          </div>
          <p data-reveal="right" className="max-w-[35ch] text-sm font-medium leading-7 text-white/56 lg:pb-2">
            You know what is being built, why it matters, and what needs attention next.
          </p>
        </div>

        <div className="process-stack mt-16">
          {steps.map(([phase, title, description], index) => (
            <article
              key={title}
              data-reveal="scale"
              style={{ top: `${5.75 + index * 1.15}rem`, '--reveal-delay': `${index * 55}ms` }}
              className="bezel-shell process-card-shell sticky p-1.5"
            >
              <div className="process-card grid min-h-[20rem] gap-12 rounded-[calc(1.65rem-0.375rem)] p-7 sm:min-h-[24rem] sm:grid-cols-[0.82fr_1.18fr] sm:items-center sm:p-10 lg:p-12">
                <div>
                  <p className="font-mono text-[9px] font-medium text-lime">{phase}</p>
                  <h3 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{title}</h3>
                </div>
                <div className="sm:justify-self-end">
                  <span className="font-mono text-[9px] font-medium text-white/34">PHASE 0{index + 1}</span>
                  <p className="mt-5 max-w-[47ch] text-base font-medium leading-8 text-white/64 sm:text-lg">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
