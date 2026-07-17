function SectionTitle({ eyebrow, title, description, align = 'left', tone = 'dark' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const titleColor = tone === 'light' ? 'text-canvas' : 'text-white'
  const descriptionColor = tone === 'light' ? 'text-slate-600' : 'text-slate-400'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.18em] text-mint">
          <span className="h-px w-7 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-balance font-display text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
