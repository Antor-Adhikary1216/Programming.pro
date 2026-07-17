import { useEffect } from 'react'

function useScrollEffects(refreshKey) {
  useEffect(() => {
    window.scrollTo({ top: 0 })
    const root = document.documentElement
    const revealElements = document.querySelectorAll('[data-reveal]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    let animationFrame
    const updateParallax = () => {
      root.style.setProperty('--background-shift', `${window.scrollY * 0.045}px`)
      root.style.setProperty('--orb-shift', `${window.scrollY * -0.025}px`)
      animationFrame = undefined
    }

    const handleScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateParallax)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))
    updateParallax()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [refreshKey])
}

export default useScrollEffects
