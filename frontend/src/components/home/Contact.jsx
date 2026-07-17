import { FaArrowRight } from 'react-icons/fa6'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'

function Contact() {
  return (
    <section className="relative overflow-hidden bg-lime py-24 text-canvas sm:py-32">
      <div className="dot-grid absolute inset-0 opacity-20" />
      <Container className="relative">
        <div data-reveal="scale" className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em]">Ready when you are</p>
            <h2 className="text-balance mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Let&apos;s build the complete thing.
            </h2>
          </div>
          <Button to="/contact" variant="dark" className="mb-1 w-fit shrink-0">
            Start a conversation <FaArrowRight aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Contact
