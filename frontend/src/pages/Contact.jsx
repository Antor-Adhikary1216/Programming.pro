import { useState } from 'react'
import { FaArrowRight, FaEnvelope, FaLocationDot } from 'react-icons/fa6'
import Button from '../components/common/Button.jsx'
import Container from '../components/common/Container.jsx'
import PageHero from '../components/common/PageHero.jsx'
import { sendContactMessage } from '../services/contactApi.js'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setSubmitting(true)
      setFeedback({ type: '', message: '' })
      await sendContactMessage(form)
      setForm(initialForm)
      setFeedback({ type: 'success', message: 'Your message was sent successfully.' })
    } catch (requestError) {
      setFeedback({ type: 'error', message: requestError.message })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = 'rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-normal text-white outline-none placeholder:text-slate-600 focus:border-mint/50 focus:ring-4 focus:ring-mint/5'

  return (
    <div id="top" className="bg-canvas">
      <PageHero
        eyebrow="Contact"
        title="Tell me what the product needs to do."
        description="Share the idea, the problem, and where things currently stand. I’ll help turn it into a clear full-stack build."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div data-reveal="left">
              <p className="font-display text-2xl font-semibold">Let&apos;s make it concrete.</p>
              <p className="mt-4 max-w-sm leading-7 text-slate-400">
                Useful context includes the audience, required features, timeline, and any existing code or design.
              </p>
              <div className="mt-9 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-slate-300">
                  <FaEnvelope className="text-mint" /> Available for project conversations
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-slate-300">
                  <FaLocationDot className="text-mint" /> Remote-friendly collaboration
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} data-reveal className="grid gap-5 rounded-3xl border border-white/10 bg-panel/65 p-6 backdrop-blur sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {['name', 'email'].map((field) => (
                  <label key={field} className="grid gap-2 text-sm font-semibold capitalize text-slate-300">
                    {field}
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                      required
                      className={fieldClass}
                    />
                  </label>
                ))}
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-300">
                Project details
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="What are you building?"
                  className={`${fieldClass} resize-y`}
                />
              </label>
              {feedback.message && (
                <p className={`rounded-xl p-3 text-sm ${feedback.type === 'success' ? 'bg-mint/10 text-mint' : 'bg-red-500/10 text-red-300'}`}>
                  {feedback.message}
                </p>
              )}
              <Button type="submit" disabled={submitting} className="w-fit disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? 'Sending…' : 'Send project details'} <FaArrowRight aria-hidden="true" />
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
