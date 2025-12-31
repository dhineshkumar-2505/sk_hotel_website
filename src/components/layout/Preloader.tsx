import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onComplete, 800) // Delay before fade out
                    return 100
                }
                return prev + 2
            })
        }, 30)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-ivory via-cream to-ivory"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative flex flex-col items-center">
                {/* SK Monogram Logo */}
                <motion.svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className="relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Circular progress ring */}
                    <motion.circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="3"
                        strokeDasharray="565.48"
                        strokeDashoffset={565.48 - (565.48 * progress) / 100}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
                    />

                    {/* S Letter - SVG Path Animation */}
                    <motion.path
                        d="M 70 60 Q 50 60 50 80 Q 50 95 70 95 L 80 95 Q 100 95 100 110 Q 100 125 80 125 L 60 125"
                        fill="none"
                        stroke="#8B4049"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                    />

                    {/* K Letter - SVG Path Animation */}
                    <motion.path
                        d="M 120 60 L 120 125 M 120 90 L 145 60 M 120 90 L 145 125"
                        fill="none"
                        stroke="#8B4049"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
                    />

                    {/* Steam particles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx="100"
                            cy="50"
                            r="3"
                            fill="#D4AF37"
                            opacity="0.6"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{
                                y: [-20, -40, -60],
                                opacity: [0, 0.6, 0],
                                scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.8 + i * 0.3,
                                repeat: 2,
                                ease: 'easeOut'
                            }}
                        />
                    ))}
                </motion.svg>

                {/* Pulsing glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gold/20 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />

                {/* Progress text */}
                <motion.p
                    className="mt-8 font-heading text-2xl text-maroon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {progress}%
                </motion.p>
            </div>
        </motion.div>
    )
}
