import { motion } from 'framer-motion'
import { useState } from 'react'
import { MenuItem } from '../../data/menuItems'

interface MenuCardProps {
    item: MenuItem
    index: number
}

export default function MenuCard({ item, index }: MenuCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="group relative overflow-hidden rounded-3xl transition-all"
            style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.12)',
                transform: 'translateZ(0)',
                willChange: 'transform, box-shadow',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1]
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
                y: -8,
                boxShadow: '0 12px 48px rgba(31, 38, 135, 0.18)',
                transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
            }}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                <motion.img
                    src={item.image}
                    alt={item.englishName}
                    className="h-full w-full object-cover"
                    style={{
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />

                {/* Subtle Gradient Overlay */}
                <div
                    className="absolute inset-0 transition-opacity"
                    style={{
                        background: 'linear-gradient(to top, rgba(26, 26, 29, 0.4) 0%, transparent 60%)',
                        opacity: isHovered ? 0.6 : 0.8,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative p-8">
                <div className="mb-3">
                    <h3
                        className="font-tamil text-3xl font-bold leading-tight"
                        style={{
                            background: 'linear-gradient(135deg, #C1121F 0%, #FF6B35 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {item.tamilName}
                    </h3>
                </div>

                <p className="mb-4 font-heading text-2xl font-semibold text-charcoal" style={{ letterSpacing: '-0.01em' }}>
                    {item.englishName}
                </p>

                {item.description && (
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isHovered ? 'auto' : 0,
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <p className="pt-2 font-body text-sm leading-relaxed text-charcoal/70">
                            {item.description}
                        </p>
                    </motion.div>
                )}

                {/* Dietary Badge */}
                <div className="mt-4 flex gap-2">
                    <div
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                        style={{
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: '#059669',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                        }}
                    >
                        <span className="text-sm">🌱</span>
                        Pure Veg
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
