import { useState } from 'react'
import { FaArrowRight, FaLock } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/common/AnimatedBackground.jsx'
import Button from '../components/common/Button.jsx'
import Container from '../components/common/Container.jsx'
import useAuth from '../hooks/useAuth.js'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setCredentials((currentCredentials) => ({ ...currentCredentials, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setSubmitting(true)
      setError('')
      await login(credentials)
      navigate(location.state?.from || '/dashboard', { replace: true })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="top" className="relative min-h-[calc(100svh-72px)] overflow-hidden py-16">
      <AnimatedBackground />
      <Container className="relative z-10">
        <form onSubmit={handleSubmit} className="mx-auto grid max-w-md gap-5 rounded-3xl border border-white/12 bg-panel/80 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9">
          <span className="grid size-12 place-items-center rounded-2xl bg-lime text-canvas"><FaLock /></span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Private dashboard</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.045em] text-white">Sign in</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">Manage project content and portfolio messages.</p>
          </div>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-mint/50"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-mint/50"
          />
          {error && <p className="rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Sign in'} <FaArrowRight />
          </Button>
        </form>
      </Container>
    </section>
  )
}

export default Login
