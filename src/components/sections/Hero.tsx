import { motion } from 'framer-motion'

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Static Premium Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-ivory" />

            {/* Subtle Overlay Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #FF6B35 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h1
                        className="mb-4 font-tamil text-5xl font-bold sm:text-6xl md:text-8xl lg:text-9xl"
                        style={{
                            background: 'linear-gradient(135deg, #C1121F 0%, #FF6B35 50%, #F7931E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 4px 20px rgba(193, 18, 31, 0.1)',
                        }}
                    >
                        SK சைவ உணவகம்
                    </h1>

                    <h2
                        className="mb-8 font-heading text-4xl font-medium text-charcoal md:text-5xl lg:text-6xl"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        SK Tiffin Center
                    </h2>

                    <motion.div
                        className="mb-8 inline-flex items-center gap-3 rounded-full px-8 py-3"
                        style={{
                            background: 'rgba(255, 107, 53, 0.08)',
                            border: '1px solid rgba(255, 107, 53, 0.15)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <span
                            className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                            style={{
                                boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)',
                            }}
                        />
                        <span className="font-body text-sm font-medium text-charcoal sm:text-lg">
                            Ambattur, Chennai
                        </span>
                    </motion.div>

                    <p
                        className="mx-auto mb-12 max-w-2xl font-body text-xl font-normal leading-relaxed text-charcoal/80 md:text-2xl"
                        style={{ letterSpacing: '-0.01em' }}
                    >
                        Authentic South Indian Vegetarian Tiffin
                        <br />
                        <span className="font-tamil text-sm text-saffron sm:text-base lg:text-lg">பாரம்பரிய தமிழ் சுவை</span>
                    </p>

                    {/* Single Premium CTA */}
                    <motion.button
                        onClick={() => scrollToSection('menu')}
                        className="group relative overflow-hidden rounded-full px-8 py-4 font-heading text-base font-semibold text-white transition-all sm:px-12 sm:py-5 sm:text-lg"
                        style={{
                            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Menu
                            <svg
                                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
