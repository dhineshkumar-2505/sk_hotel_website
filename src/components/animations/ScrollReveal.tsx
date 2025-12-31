import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}: ScrollRevealProps) {
    const { targetRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true
    })
    const prefersReducedMotion = useReducedMotion()

    const variants = {
        up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
        down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
        left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
        right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
        scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }
    }

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            ref={targetRef}
            className={className}
            initial="hidden"
            animate={isIntersecting ? 'visible' : 'hidden'}
            variants={variants[direction]}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    )
}
