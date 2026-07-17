import { FaCircleNotch } from 'react-icons/fa6'

function Loader({ label = 'Loading…' }) {
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-mint" role="status">
      <FaCircleNotch className="animate-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export default Loader
