import Container from '../common/Container.jsx'

const skillGroups = [
  ['Interface', 'React, React Router, JavaScript, Tailwind CSS, responsive systems'],
  ['Services', 'Node.js, Express, REST APIs, validation, predictable error handling'],
  ['Data and delivery', 'MongoDB Atlas, native driver, Git, environment configuration'],
]

function Skills() {
  return (
    <section className="overflow-hidden bg-transparent py-28 text-white sm:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          <div data-reveal="scale" className="bezel-shell mx-auto aspect-square w-full max-w-[32rem]">
            <div className="bezel-core stack-ledger absolute inset-1.5 overflow-hidden rounded-[calc(1.8rem-0.375rem)] p-6 sm:p-8" aria-label="Core technology stack">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[9px] font-medium">
                <span className="text-lime">Selected stack</span>
                <span className="text-cream/38">Built for maintainability</span>
              </div>
              <div className="mt-8 space-y-1">
                {['React', 'Node.js', 'MongoDB'].map((technology, index) => (
                  <div key={technology} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-5">
                    <strong className="text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-none tracking-[-0.055em] text-cream">{technology}</strong>
                    <span className="font-mono text-[9px] text-lime/70">0{index + 1}</span>
                  </div>
                ))}
              </div>
              <p className="absolute bottom-7 left-6 max-w-[30ch] text-sm font-medium leading-6 text-cream/54 sm:left-8">
                A practical foundation for responsive products and dependable services.
              </p>
            </div>
          </div>

          <div>
            <div data-reveal className="max-w-[44rem]">
              <p className="section-kicker">Technology with a reason</p>
              <h2 className="text-balance mt-6 text-[clamp(3.1rem,5.7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                One stack. <span className="text-white/52">No handoff gaps.</span>
              </h2>
              <p className="mt-6 max-w-[53ch] text-base font-medium leading-8 text-white/62">
                Tools stay subordinate to clarity, maintainability, and the experience the product needs.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {skillGroups.map(([title, skills], index) => (
                <article
                  key={title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 60}ms` }}
                  className="bezel-shell skill-row-shell p-1"
                >
                  <div className="skill-row grid gap-4 rounded-[calc(1.35rem-0.25rem)] p-5 sm:grid-cols-[9rem_1fr] sm:items-start sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-lime/72">0{index + 1}</span>
                      <h3 className="text-base font-semibold tracking-[-0.025em] text-white">{title}</h3>
                    </div>
                    <p className="text-sm font-medium leading-7 text-white/56">{skills}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
