import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIsDesktop } from '../../hooks/useMediaQuery'

export default function CustomCursor() {
    const isDesktop = useIsDesktop()
    const [cursorText, setCursorText] = useState('')
    const [isHovering, setIsHovering] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { stiffness: 150, damping: 15 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        if (!isDesktop) return

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement

            if (target.tagName === 'BUTTON' || target.closest('button')) {
                setCursorText('Click')
                setIsHovering(true)
            } else if (target.tagName === 'A' || target.closest('a')) {
                setCursorText('View')
                setIsHovering(true)
            } else if (target.tagName === 'IMG' || target.closest('img')) {
                setCursorText('View')
                setIsHovering(true)
            } else {
                setCursorText('')
                setIsHovering(false)
            }
        }

        const handleMouseLeave = () => {
            setCursorText('')
            setIsHovering(false)
        }

        window.addEventListener('mousemove', moveCursor)

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, img, [role="button"]')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        // Add class to body to hide default cursor
        document.body.classList.add('custom-cursor-active')

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
            document.body.classList.remove('custom-cursor-active')
        }
    }, [isDesktop, cursorX, cursorY])

    if (!isDesktop) return null

    return (
        <>
            {/* Main cursor ring */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            >
                <motion.div
                    className="flex items-center justify-center rounded-full border-2 border-gold"
                    animate={{
                        width: isHovering ? 80 : 40,
                        height: isHovering ? 80 : 40,
                        backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0)'
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    {cursorText && (
                        <motion.span
                            className="text-xs font-semibold text-gold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>

            {/* Trail particles */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 rounded-full bg-gold/30 blur-sm"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
        </>
    )
}
