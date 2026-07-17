import { FaDatabase, FaEnvelope, FaFolderOpen } from 'react-icons/fa6'
import Button from '../components/common/Button.jsx'
import Container from '../components/common/Container.jsx'
import useAuth from '../hooks/useAuth.js'

const cards = [
  [FaFolderOpen, 'Projects', 'Manage portfolio case studies'],
  [FaEnvelope, 'Messages', 'Review incoming project enquiries'],
  [FaDatabase, 'API status', 'Monitor the portfolio data layer'],
]

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <section id="top" className="min-h-[calc(100svh-72px)] bg-canvas py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Private workspace</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.045em] text-white">Dashboard</h1>
            <p className="mt-3 text-slate-400">Signed in as {user?.email || 'administrator'}.</p>
          </div>
          <Button type="button" variant="secondary" onClick={logout}>Sign out</Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map(([Icon, title, description], index) => (
            <article key={title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className="rounded-3xl border border-white/10 bg-panel p-7">
              <Icon className="text-2xl text-lime" />
              <h2 className="mt-8 font-display text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Dashboard
