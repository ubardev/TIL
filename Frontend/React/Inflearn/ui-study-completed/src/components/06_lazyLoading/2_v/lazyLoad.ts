import vanillaIntersectionObserver from '@/hook/vanilla/intersectionObserver'

const lazyLoad = ($elem: HTMLImageElement, src: string) => {
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('src', src)
        observer?.disconnect()
      }
    })
  }

  const observer = vanillaIntersectionObserver($elem, { threshold: 0 }, handleIntersect)
}

export default lazyLoad
