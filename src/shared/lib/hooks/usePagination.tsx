import { type MutableRefObject, useEffect, useRef } from 'react'

export interface IUsePaginationProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const usePagination = ({ callback, wrapperRef, triggerRef }: IUsePaginationProps) => {
  const observer = useRef<IntersectionObserver | undefined>(undefined)

  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 0.5
      }

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.current.observe(triggerElement)
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
