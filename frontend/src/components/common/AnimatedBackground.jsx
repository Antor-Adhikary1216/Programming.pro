import backgroundImage from '../../assets/fullstack-system-bg.png'

function AnimatedBackground({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <img
        src={backgroundImage}
        alt=""
        className="system-background-image absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,13,0.98)_0%,rgba(6,16,13,0.82)_48%,rgba(6,16,13,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#06100d_0%,transparent_42%,rgba(6,16,13,0.35)_100%)]" />
      <div className="dot-grid absolute inset-0 opacity-45" />
      <div className="ambient-orb absolute -right-28 -top-24 size-[430px] rounded-full bg-mint/12 blur-[110px]" />
      <div className="ambient-orb absolute -bottom-48 left-1/3 size-[390px] rounded-full bg-aqua/10 blur-[120px] [animation-delay:-4s]" />
      <div className="scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent opacity-35" />
    </div>
  )
}

export default AnimatedBackground
