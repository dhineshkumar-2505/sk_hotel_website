import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

// Fade in with scale
export const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
}

// Slide in from left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

// Slide in from right
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

// Draw SVG path
export const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 2, ease: 'easeInOut' },
            opacity: { duration: 0.5 }
        }
    }
}

// Floating animation
export const floating = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
}

// Pulse animation
export const pulse = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
}

// Rotate animation
export const rotate = {
    animate: {
        rotate: 360,
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
        }
    }
}

// Spring transition
export const springTransition = {
    type: 'spring',
    stiffness: 150,
    damping: 15
}

// Smooth transition
export const smoothTransition = {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1]
}
