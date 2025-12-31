import { motion } from 'framer-motion'
import { useState } from 'react'
import { morningMenuItems, eveningMenuItems } from '../../data/menuItems'
import MenuCard from '../ui/MenuCard'
import ScrollReveal from '../animations/ScrollReveal'

type MenuType = 'morning' | 'evening'

export default function Menu() {
    const [selectedMenu, setSelectedMenu] = useState<MenuType>('morning')

    const currentMenuItems = selectedMenu === 'morning' ? morningMenuItems : eveningMenuItems
    const menuTitle = selectedMenu === 'morning' ? 'Morning Tiffins' : 'Evening Tiffins'
    const menuTitleTamil = selectedMenu === 'morning' ? 'காலை டிபன்' : 'மாலை டிபன்'
    const menuTiming = selectedMenu === 'morning' ? '6:00 AM - 11:00 AM' : '5:00 PM - 11:30 PM'

    return (
        <section id="menu" className="relative overflow-hidden py-32">
            {/* Static Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-ivory via-cream to-cream-dark" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <ScrollReveal direction="down">
                    <div className="mb-12 text-center">
                        <h2
                            className="mb-4 font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl"
                            style={{
                                background: 'linear-gradient(135deg, #C1121F 0%, #FF6B35 50%, #F7931E 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {menuTitle}
                        </h2>
                        <p className="mb-2 font-tamil text-2xl font-semibold text-saffron sm:text-3xl">{menuTitleTamil}</p>
                        <p className="mt-2 font-body text-sm text-charcoal/60 sm:text-base lg:text-lg">{menuTiming}</p>

                        {/* Menu Toggle Buttons */}
                        <div className="mx-auto mt-8 inline-flex w-full max-w-md flex-col gap-2 rounded-2xl p-2 sm:w-auto sm:flex-row sm:gap-3 sm:rounded-full"
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 4px 16px rgba(31, 38, 135, 0.1)',
                            }}
                        >
                            <motion.button
                                onClick={() => setSelectedMenu('morning')}
                                className="relative w-full rounded-full px-6 py-3 font-heading text-sm font-semibold transition-all sm:w-auto sm:px-8 sm:text-base"
                                style={{
                                    color: selectedMenu === 'morning' ? '#fff' : '#1A1A1D',
                                    background: selectedMenu === 'morning'
                                        ? 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
                                        : 'transparent',
                                    boxShadow: selectedMenu === 'morning'
                                        ? '0 4px 12px rgba(255, 107, 53, 0.3)'
                                        : 'none',
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                🌅 Morning Menu
                            </motion.button>

                            <motion.button
                                onClick={() => setSelectedMenu('evening')}
                                className="relative rounded-full px-8 py-3 font-heading text-base font-semibold transition-all"
                                style={{
                                    color: selectedMenu === 'evening' ? '#fff' : '#1A1A1D',
                                    background: selectedMenu === 'evening'
                                        ? 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
                                        : 'transparent',
                                    boxShadow: selectedMenu === 'evening'
                                        ? '0 4px 12px rgba(255, 107, 53, 0.3)'
                                        : 'none',
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                🌙 Evening Menu
                            </motion.button>
                        </div>

                        {/* Elegant Divider */}
                        <div className="mx-auto mt-6 flex items-center justify-center gap-3 sm:mt-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-saffron/30" />
                            <div className="h-1.5 w-1.5 rounded-full bg-saffron" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-saffron/30" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Menu Grid with Animation */}
                <motion.div
                    key={selectedMenu}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                    {currentMenuItems.map((item, index) => (
                        <MenuCard key={item.id} item={item} index={index} />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div className="mt-16 text-center sm:mt-24">
                        <motion.a
                            href="tel:8098878937"
                            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-heading text-base font-semibold text-white transition-all sm:gap-3 sm:px-10 sm:py-5 sm:text-xl"
                            style={{
                                background: 'linear-gradient(135deg, #C1121F 0%, #FF6B35 50%, #F7931E 100%)',
                                boxShadow: '0 10px 40px rgba(255, 107, 53, 0.25)',
                                transform: 'translateZ(0)',
                                willChange: 'transform, box-shadow',
                            }}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 15px 50px rgba(255, 107, 53, 0.35)',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span className="hidden sm:inline">Call to Order: 8098878937</span>
                            <span className="inline sm:hidden">Call: 8098878937</span>
                        </motion.a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
