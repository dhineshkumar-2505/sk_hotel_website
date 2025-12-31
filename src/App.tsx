import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './components/layout/Preloader'
import ScrollProgressBar from './components/layout/ScrollProgressBar'
import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'
import Chef from './components/sections/Chef'
import Contact from './components/sections/Contact'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Ensure minimum loading time for preloader animation
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <ScrollProgressBar />

                    <main className="overflow-x-hidden">
                        <Hero />
                        <Menu />
                        <Chef />
                        <Contact />

                        {/* Footer */}
                        <footer className="relative overflow-hidden py-16 text-center text-cream">
                            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

                            <div className="container relative z-10 mx-auto px-4">
                                <div className="mb-6 flex items-center justify-center gap-4">
                                    <span
                                        className="font-tamil text-2xl font-bold"
                                        style={{
                                            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        SK சைவ உணவகம்
                                    </span>
                                    <span className="text-2xl text-turmeric">|</span>
                                    <span className="font-heading text-xl font-semibold">SK Tiffin Center</span>
                                </div>
                                <p className="mb-3 font-body text-base text-cream/80">
                                    Ambattur, Chennai | 8098878937 | Pure Vegetarian
                                </p>
                                <p className="font-body text-sm text-cream/60">
                                    © 2025 SK Tiffin Center. Made with{' '}
                                    <span className="text-saffron">♥</span> in Chennai
                                </p>
                            </div>
                        </footer>
                    </main>
                </>
            )}
        </>
    )
}

export default App
