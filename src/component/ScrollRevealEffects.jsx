import { useEffect } from 'react'

export default function ScrollRevealEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-steps')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    const stepsGrid = document.querySelector('.steps-grid')
    if (stepsGrid) observer.observe(stepsGrid)

    const testiObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-testi')
            testiObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    const testiGrid = document.querySelector('.testimonials-grid')
    if (testiGrid) testiObserver.observe(testiGrid)

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.reveal-on-scroll, .reveal-split').forEach((section) => {
      revealObserver.observe(section)
    })

    return () => {
      observer.disconnect()
      testiObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  return null
}

