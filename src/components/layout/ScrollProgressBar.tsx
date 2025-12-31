import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgressBar() {
    const scrollProgress = useScrollProgress()

    return (
        <motion.div
            className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-gold via-maroon to-gold"
            style={{ width: `${scrollProgress}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        />
    )
}
