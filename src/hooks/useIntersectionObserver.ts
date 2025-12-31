import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
    threshold?: number
    root?: Element | null
    rootMargin?: string
    freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const target = targetRef.current
        if (!target) return

        if (freezeOnceVisible && isIntersecting) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            { threshold, root, rootMargin }
        )

        observer.observe(target)

        return () => {
            if (target) {
                observer.unobserve(target)
            }
        }
    }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting])

    return { targetRef, isIntersecting }
}
