import Container from '../common/Container.jsx'

const services = [
  {
    label: 'Interface direction',
    title: 'Clarity before decoration',
    text: 'Responsive React work where hierarchy, typography, and interaction make the next action feel obvious.',
  },
  {
    label: 'System architecture',
    title: 'Backends that stay legible',
    text: 'Focused Express APIs, explicit validation, and data flows designed to remain understandable as the product changes.',
  },
  {
    label: 'Product delivery',
    title: 'One connected build',
    text: 'Design, frontend, backend, and MongoDB decisions shaped together instead of handed across disconnected layers.',
  },
]

function AboutPreview() {
  return (
    <section className="bg-transparent py-28 text-white sm:py-36">
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div data-reveal="left" className="max-w-[37rem] pb-2">
            <p className="section-kicker">Design across the stack</p>
            <h2 className="text-balance mt-6 text-[clamp(3.1rem,5.5vw,5.9rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              One point of view, <span className="text-white/52">from screen to schema.</span>
            </h2>
            <p className="mt-7 max-w-[53ch] text-base font-medium leading-8 text-white/64">
              I connect product intent to working code so the interface, service layer, and data model move in the same direction.
            </p>
          </div>

          <div data-reveal="scale" className="bezel-shell relative min-h-[34rem]">
            <div className="bezel-core practice-board absolute inset-1.5 overflow-hidden rounded-[calc(1.8rem-0.375rem)] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 font-mono text-[9px] font-medium">
                <span className="text-lime">Full-stack practice</span>
                <span className="text-cream/38">Interface to infrastructure</span>
              </div>

              <div className="practice-list mt-8">
                {[
                  ['01', 'Interface', 'Clear hierarchy and responsive interaction.'],
                  ['02', 'Services', 'Predictable APIs and useful failure states.'],
                  ['03', 'Data', 'Models shaped around real product work.'],
                ].map(([number, title, text]) => (
                  <div key={title} className="practice-row grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[2.5rem_1fr_1.2fr] sm:items-baseline">
                    <span className="font-mono text-[9px] text-lime/70">{number}</span>
                    <strong className="text-2xl font-semibold tracking-[-0.035em] text-cream sm:text-3xl">{title}</strong>
                    <p className="text-sm font-medium leading-6 text-cream/56">{text}</p>
                  </div>
                ))}
              </div>

              <p className="absolute bottom-7 left-6 max-w-[25ch] text-2xl font-semibold leading-tight tracking-[-0.04em] text-cream/72 sm:left-8 sm:text-3xl">
                One connected product system.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 65}ms` }}
              className={`bezel-shell service-card-shell ${index === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}`}
            >
              <div className={`service-card h-full rounded-[calc(1.55rem-0.375rem)] p-7 sm:p-9 ${index === 0 ? 'service-card-accent flex min-h-[26rem] flex-col justify-between' : ''}`}>
                <p className={`font-mono text-[9px] font-medium ${index === 0 ? 'text-canvas/60' : 'text-lime/76'}`}>{service.label}</p>
                <div className={index === 0 ? 'mt-24' : 'mt-10'}>
                  <h3 className={`text-balance font-semibold leading-[0.98] tracking-[-0.045em] ${index === 0 ? 'max-w-xl text-4xl sm:text-6xl' : 'text-2xl sm:text-3xl'}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-5 max-w-[48ch] text-sm font-medium leading-7 ${index === 0 ? 'text-canvas/68' : 'text-white/58'}`}>{service.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutPreview
