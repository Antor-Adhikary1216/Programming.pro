import { NavLink } from 'react-router-dom'
import { ArrowRightIcon, MailIcon } from '../common/Icons.jsx'
import Container from '../common/Container.jsx'

function Contact() {
  return (
    <section className="bg-transparent pb-12 pt-28 text-white sm:pb-16 sm:pt-36">
      <Container>
        <div className="bezel-shell contact-shell p-1.5">
          <div className="contact-panel relative isolate overflow-hidden rounded-[calc(1.8rem-0.375rem)] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="contact-grid absolute inset-0" aria-hidden="true" />
            <div className="contact-orb" aria-hidden="true" />
            <div className="relative z-10 max-w-[65rem]">
              <p data-reveal className="section-kicker">
                Available for thoughtful work
              </p>
              <h2
                data-reveal
                style={{ '--reveal-delay': '55ms' }}
                className="text-balance mt-6 text-[clamp(3.5rem,7.5vw,7.9rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
              >
                Let’s build something <span className="text-white/52">worth using.</span>
              </h2>
              <p data-reveal style={{ '--reveal-delay': '110ms' }} className="mt-7 max-w-[50ch] text-base font-medium leading-8 text-white/62">
                Bring the idea, the rough edges, and the real constraints. We can shape the rest together.
              </p>
              <div data-reveal style={{ '--reveal-delay': '165ms' }} className="mt-9 flex flex-wrap items-center gap-4">
                <NavLink
                  to="/contact"
                  className="button-primary group inline-flex min-h-13 items-center gap-4 rounded-[0.95rem] bg-lime py-1.5 pl-5 pr-1.5 text-sm font-bold text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  Start a conversation
                  <span className="button-icon bg-canvas text-lime">
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                  </span>
                </NavLink>
                <a
                  href="mailto:antoradhikari1612@gmail.com"
                  className="contact-email inline-flex min-h-12 items-center gap-3 text-sm font-semibold text-white/64 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <MailIcon className="size-4" aria-hidden="true" />
                  antoradhikari1612@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
