import { FaCode, FaDatabase, FaServer } from 'react-icons/fa6'
import portrait from '../assets/profile-portrait.jpeg'
import Container from '../components/common/Container.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionTitle from '../components/common/SectionTitle.jsx'

const values = [
  ['Clarity over cleverness', 'Code, interfaces, and APIs should explain themselves before documentation has to.'],
  ['Working slices over silos', 'The fastest feedback comes from complete features that cross the stack.'],
  ['Useful polish', 'Motion, feedback, and visual detail should help people understand what is happening.'],
]

function About() {
  return (
    <div id="top" className="bg-canvas">
      <PageHero
        eyebrow="About"
        title="A product-minded developer across the full stack."
        description="I enjoy the complete problem: what people see, what the server decides, how the data behaves, and how the finished product reaches production."
      />

      <section className="bg-cream py-20 text-canvas sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div data-reveal="left" className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-mint/20 blur-3xl" />
              <img src={portrait} alt="Full-stack developer" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_24%]" />
            </div>
            <div data-reveal>
              <SectionTitle
                eyebrow="How I think"
                title="The best technical decisions begin with the product."
                description="I choose tools and architecture based on the people using the product, the data it owns, and the change it needs to support—not because a technology happens to be fashionable."
                tone="light"
              />
              <div className="mt-10 grid gap-3">
                {values.map(([title, text], index) => (
                  <article key={title} className="rounded-2xl border border-canvas/10 bg-white p-5">
                    <div className="flex gap-4">
                      <span className="font-display text-xs font-bold text-emerald-700">0{index + 1}</span>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-panel py-20 sm:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [FaCode, 'Interface', 'React experiences with strong hierarchy, accessibility, and component boundaries.'],
              [FaServer, 'Application', 'Express services with validated inputs, authentication, and clear responsibilities.'],
              [FaDatabase, 'Data', 'MongoDB models designed around product behavior and useful queries.'],
            ].map(([Icon, title, text], index) => (
              <article key={title} data-reveal style={{ '--reveal-delay': `${index * 90}ms` }} className="rounded-3xl border border-white/10 bg-canvas/45 p-7">
                <Icon className="text-2xl text-lime" />
                <h2 className="mt-8 font-display text-2xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About
