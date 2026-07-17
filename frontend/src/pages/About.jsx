import {
  FaArrowRight,
  FaBriefcase,
  FaCameraRetro,
  FaCertificate,
  FaChartLine,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaLanguage,
  FaLocationDot,
} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import portrait from '../assets/profile-portrait.jpeg'
import Container from '../components/common/Container.jsx'

const categories = [
  ['Work', '#work'],
  ['Education', '#education'],
  ['Interests', '#interests'],
  ['Credentials', '#credentials'],
]

const workHighlights = [
  'Build responsive, end-to-end web applications with React, Node.js, Express, and MongoDB.',
  'Design REST APIs and data flows that keep frontend and backend behavior predictable.',
  'Test, debug, and improve features across the complete product instead of one isolated layer.',
]

const education = [
  {
    period: 'Completed',
    institution: 'Kalyani Government University',
    program: 'B.A. Graduate & Computer Science',
    location: 'Nadia, West Bengal',
  },
  {
    period: 'Passed 2025',
    institution: 'HPD Institution, Government of West Bengal',
    program: 'Higher Secondary Education',
    location: 'Nadia, West Bengal',
  },
]

const interests = [
  {
    icon: FaCameraRetro,
    title: 'Photography',
    text: 'Exploring composition, visual storytelling, and the details that make an image memorable.',
  },
  {
    icon: FaChartLine,
    title: 'Cricket & data',
    text: 'Following cricket and turning match statistics into interactive, understandable interfaces.',
  },
  {
    icon: FaCode,
    title: 'Side projects',
    text: 'Learning by building practical ideas, refining the design, and connecting every technical layer.',
  },
]

function About() {
  return (
    <div id="top" className="bg-[#f3efe6] text-[#171717]">
      <section className="overflow-hidden bg-[#f3efe6]">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/15 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 sm:text-xs">
            <span>About / Antor Adhikari</span>
            <span>Kolkata, West Bengal, India</span>
          </div>

          <div className="grid min-h-[720px] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div>
              <p data-reveal className="text-xs font-bold uppercase tracking-[0.22em] text-[#2f5cff]">
                The person behind the product
              </p>
              <h1
                data-reveal
                style={{ '--reveal-delay': '80ms' }}
                className="text-balance mt-7 max-w-4xl font-editorial text-[clamp(4.2rem,8.5vw,8.5rem)] font-semibold leading-[0.79] tracking-[-0.06em]"
              >
                Curious by nature.
                <em className="block font-medium text-[#2f5cff]">Practical by choice.</em>
              </h1>
              <p
                data-reveal
                style={{ '--reveal-delay': '160ms' }}
                className="mt-8 max-w-2xl text-base font-medium leading-8 text-black/60 sm:text-lg"
              >
                I&apos;m Antor, an independent full-stack developer who enjoys understanding the whole problem—
                the people using a product, the interface they see, and the systems working behind it.
              </p>

              <div data-reveal style={{ '--reveal-delay': '220ms' }} className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold">
                <span className="flex items-center gap-2"><FaBriefcase className="text-[#2f5cff]" /> Independent developer</span>
                <span className="flex items-center gap-2"><FaLocationDot className="text-[#2f5cff]" /> Kolkata, India</span>
              </div>
            </div>

            <div data-reveal="right" style={{ '--reveal-delay': '140ms' }} className="relative mx-auto w-full max-w-[410px] lg:ml-auto">
              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-[#ff765c]" />
              <img
                src={portrait}
                alt="Antor Adhikari, full-stack web developer"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_24%] shadow-[0_28px_70px_rgba(23,23,23,0.16)]"
              />
            </div>
          </div>
        </Container>
      </section>

      <nav className="border-y border-black/15 bg-white/45" aria-label="About page categories">
        <Container className="flex gap-8 overflow-x-auto py-5">
          {categories.map(([label, href]) => (
            <a key={label} href={href} className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-black/45 transition hover:text-[#2f5cff]">
              {label}
            </a>
          ))}
        </Container>
      </nav>

      <section id="work" className="scroll-mt-24 bg-[#171717] py-24 text-white sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal="left">
              <FaBriefcase className="text-2xl text-[#86a2ff]" aria-hidden="true" />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#86a2ff]">Work information</p>
              <h2 className="mt-6 font-editorial text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.82] tracking-[-0.05em]">
                Building across
                <em className="block font-medium text-[#86a2ff]">the full stack.</em>
              </h2>
            </div>

            <div data-reveal className="lg:pt-10">
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/15 pb-7">
                <div>
                  <h3 className="font-editorial text-3xl font-semibold sm:text-4xl">Independent Full-Stack Developer</h3>
                  <p className="mt-2 text-sm font-semibold text-white/45">Personal & academic development projects</p>
                </div>
                <span className="rounded-full border border-[#86a2ff]/40 px-4 py-2 text-xs font-bold text-[#86a2ff]">Ongoing</span>
              </div>

              <div className="divide-y divide-white/15">
                {workHighlights.map((item, index) => (
                  <div key={item} className="grid gap-4 py-6 sm:grid-cols-[42px_1fr]">
                    <span className="text-xs font-bold text-white/30">0{index + 1}</span>
                    <p className="max-w-2xl text-sm font-medium leading-7 text-white/60 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="education" className="scroll-mt-24 bg-[#dfe7ff] py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div data-reveal="left">
              <FaGraduationCap className="text-2xl text-[#2f5cff]" aria-hidden="true" />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#2f5cff]">Education</p>
              <h2 className="mt-6 font-editorial text-[clamp(3.5rem,6vw,6.2rem)] font-semibold leading-[0.82] tracking-[-0.05em]">
                Learning that supports the work.
              </h2>
            </div>

            <div className="border-t border-black/20">
              {education.map((item, index) => (
                <article key={item.institution} data-reveal style={{ '--reveal-delay': `${index * 90}ms` }} className="grid gap-5 border-b border-black/20 py-8 sm:grid-cols-[120px_1fr]">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f5cff]">{item.period}</p>
                  <div>
                    <h3 className="font-editorial text-3xl font-semibold leading-none sm:text-4xl">{item.institution}</h3>
                    <p className="mt-4 text-sm font-bold">{item.program}</p>
                    <p className="mt-2 text-sm font-medium text-black/45">{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="interests" className="scroll-mt-24 bg-[#ff765c] py-24 sm:py-32">
        <Container>
          <div className="grid gap-8 border-b border-black/20 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <p data-reveal className="text-xs font-bold uppercase tracking-[0.22em] text-black/55">Hobbies & interests</p>
            <h2 data-reveal className="font-editorial text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.82] tracking-[-0.05em]">
              Ideas also come from
              <em className="block font-medium text-white">life away from code.</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3">
            {interests.map(({ icon: Icon, title, text }, index) => (
              <article key={title} data-reveal style={{ '--reveal-delay': `${index * 90}ms` }} className="border-b border-black/20 py-9 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <Icon className="text-2xl" aria-hidden="true" />
                <h3 className="mt-10 font-editorial text-3xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-sm text-sm font-semibold leading-7 text-black/60">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="credentials" className="scroll-mt-24 bg-[#f3efe6] py-24 sm:py-32">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <article data-reveal className="rounded-[2rem] border border-black/15 bg-white/55 p-7 sm:p-10">
              <FaCertificate className="text-2xl text-[#2f5cff]" aria-hidden="true" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#2f5cff]">Certification</p>
              <h2 className="mt-5 font-editorial text-4xl font-semibold leading-none sm:text-5xl">Full-Stack Web Development</h2>
              <p className="mt-4 text-sm font-bold">Programming Hero</p>
              <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-black/50">
                Hands-on training in MERN architecture, responsive interfaces, API development, and deployment workflows.
              </p>
            </article>

            <div className="grid gap-5 sm:grid-cols-2">
              <article data-reveal className="rounded-[2rem] bg-[#171717] p-7 text-white sm:p-8">
                <FaLanguage className="text-2xl text-[#86a2ff]" aria-hidden="true" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#86a2ff]">Languages</p>
                <p className="mt-5 font-editorial text-3xl font-semibold leading-tight">Bengali<br />Hindi<br />English</p>
              </article>

              <article data-reveal style={{ '--reveal-delay': '80ms' }} className="rounded-[2rem] bg-[#2f5cff] p-7 text-white sm:p-8">
                <FaEnvelope className="text-2xl text-white/70" aria-hidden="true" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Availability</p>
                <p className="mt-5 font-editorial text-3xl font-semibold leading-tight">Open to full-stack opportunities and new projects.</p>
              </article>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-7 border-t border-black/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-editorial text-3xl font-semibold leading-tight sm:text-4xl">Want to know how I can help with your product?</p>
            <NavLink to="/contact" className="inline-flex h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-[#171717] px-6 text-sm font-bold text-white transition hover:bg-[#2f5cff]">
              Start a conversation <FaArrowRight aria-hidden="true" />
            </NavLink>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About
