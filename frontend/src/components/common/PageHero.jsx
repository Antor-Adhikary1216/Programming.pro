import AnimatedBackground from './AnimatedBackground.jsx'
import Container from './Container.jsx'

function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-canvas py-20 sm:py-28">
      <AnimatedBackground className="opacity-65" />
      <Container className="relative z-10">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-lime">{eyebrow}</p>
        <h1 className="text-balance mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
          {title}
        </h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>}
        {children}
      </Container>
    </section>
  )
}

export default PageHero
