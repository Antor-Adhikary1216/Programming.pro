import Container from '../common/Container.jsx'

const services = [
  {
    number: '01',
    title: 'A clear product interface',
    text: 'Responsive React experiences that make the next action obvious and feel natural on every screen.',
  },
  {
    number: '02',
    title: 'A dependable backend',
    text: 'Express APIs with focused validation, predictable data flow, and useful error handling.',
  },
  {
    number: '03',
    title: 'One connected system',
    text: 'Frontend, backend, MongoDB Atlas, and deployment decisions designed together instead of in isolation.',
  },
]

function AboutPreview() {
  return (
    <section className="bg-[#171717] py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p data-reveal className="text-xs font-bold uppercase tracking-[0.22em] text-[#86a2ff]">
            What I do
          </p>
          <h2 data-reveal className="text-balance font-editorial text-[clamp(3.4rem,6.5vw,6.7rem)] font-semibold leading-[0.84] tracking-[-0.05em]">
            Full-stack development,
            <em className="block font-medium text-[#86a2ff]">explained simply.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
              className="border-b border-white/15 py-9 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-white/35">{service.number}</span>
              <h3 className="mt-10 max-w-xs font-editorial text-3xl font-semibold leading-none">
                {service.title}
              </h3>
              <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/55">{service.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutPreview
