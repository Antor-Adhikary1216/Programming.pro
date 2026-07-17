import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-lime text-canvas shadow-[0_14px_44px_rgba(199,255,104,0.15)] hover:-translate-y-0.5 hover:bg-[#d7ff91]',
  secondary: 'border border-white/15 bg-white/5 text-white backdrop-blur hover:-translate-y-0.5 hover:border-mint/50 hover:bg-mint/10',
  light: 'bg-cream text-canvas hover:-translate-y-0.5 hover:bg-white',
  dark: 'bg-canvas text-white hover:-translate-y-0.5 hover:bg-panel-soft',
}

function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const buttonClass = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition duration-300 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button
