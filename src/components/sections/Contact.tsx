import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrollReveal from '../animations/ScrollReveal'

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const checkOpenStatus = () => {
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes()

            // Open between 6 AM - 11 AM OR 5 PM (17:00) - 11:30 PM (23:30)
            const isMorningOpen = hours >= 6 && hours < 11
            const isEveningOpen = (hours === 17 && minutes >= 0) || (hours > 17 && hours < 23) || (hours === 23 && minutes <= 30)

            setIsOpen(isMorningOpen || isEveningOpen)
        }

        // Check immediately
        checkOpenStatus()

        // Check every minute
        const interval = setInterval(checkOpenStatus, 60000)

        return () => clearInterval(interval)
    }, [])
    return (
        <section id="contact" className="relative overflow-hidden py-32 text-white">
            {/* Static Premium Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

            <div className="container relative z-10 mx-auto px-4">
                <ScrollReveal direction="down">
                    <div className="mb-24 text-center">
                        <h2
                            className="mb-6 font-heading text-6xl font-bold md:text-7xl lg:text-8xl"
                            style={{
                                background: 'linear-gradient(135deg, #FFD700 0%, #F7931E 50%, #FF6B35 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Visit Us
                        </h2>
                        <p className="font-tamil text-3xl font-semibold text-turmeric">எங்களை சந்திக்க</p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Timings Card */}
                    <ScrollReveal direction="left">
                        <div
                            className="rounded-3xl p-10 transition-all"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                transform: 'translateZ(0)',
                            }}
                        >
                            <div className="mb-8 flex items-center gap-4">
                                <div
                                    className="rounded-2xl p-4"
                                    style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                                    }}
                                >
                                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3
                                    className="font-heading text-3xl font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #FFD700 0%, #F7931E 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Opening Hours
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div
                                    className="rounded-2xl p-5"
                                    style={{
                                        background: 'rgba(255, 107, 53, 0.1)',
                                        border: '1px solid rgba(255, 107, 53, 0.2)',
                                    }}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-body text-lg font-semibold">🌅 Morning</span>
                                            <span className="font-mono text-lg font-bold text-turmeric">6:00 AM - 11:00 AM</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-body text-lg font-semibold">🌙 Evening</span>
                                            <span className="font-mono text-lg font-bold text-turmeric">5:00 PM - 11:30 PM</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span
                                        className="h-3 w-3 rounded-full transition-colors"
                                        style={{
                                            backgroundColor: isOpen ? '#10B981' : '#EF4444',
                                            boxShadow: isOpen
                                                ? '0 0 0 4px rgba(16, 185, 129, 0.2)'
                                                : '0 0 0 4px rgba(239, 68, 68, 0.2)',
                                        }}
                                    />
                                    <span
                                        className="font-body text-base font-semibold transition-colors"
                                        style={{
                                            color: isOpen ? '#10B981' : '#EF4444',
                                        }}
                                    >
                                        {isOpen ? 'Open Now' : 'Closed'}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-10 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="rounded-xl p-3"
                                        style={{
                                            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                                        }}
                                    >
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-body text-xl font-semibold">Ambattur, Chennai</p>
                                        <p className="font-tamil text-base text-cream/70">அம்பத்தூர், சென்னை</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div
                                        className="rounded-xl p-3"
                                        style={{
                                            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                                        }}
                                    >
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <a
                                        href="tel:8098878937"
                                        className="font-mono text-xl font-bold text-turmeric transition-colors hover:text-turmeric-light"
                                    >
                                        8098878937
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Info Cards */}
                    <ScrollReveal direction="right">
                        <div className="space-y-6">
                            {[
                                { icon: '🌱', title: '100% Vegetarian', tamil: 'முழு சைவம்', gradient: 'from-emerald-500 to-emerald-600' },
                                { icon: '🔥', title: 'Fresh Daily', tamil: 'தினமும் புதிதாக', gradient: 'from-saffron to-turmeric' },
                                { icon: '❤️', title: 'Made with Love', tamil: 'அன்புடன் தயாரிக்கப்பட்டது', gradient: 'from-curry-red to-saffron' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-2xl p-8 transition-all"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(20px) saturate(180%)',
                                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                        transform: 'translateZ(0)',
                                        willChange: 'transform, box-shadow',
                                    }}
                                    whileHover={{
                                        y: -4,
                                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className="flex items-center gap-5">
                                        <div
                                            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-3xl`}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-heading text-2xl font-bold text-turmeric">{item.title}</h4>
                                            <p className="font-tamil text-base text-cream/70">{item.tamil}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* WhatsApp Button */}
                            <motion.a
                                href="https://wa.me/918098878937"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-4 rounded-full px-10 py-6 font-heading text-xl font-bold text-white transition-all"
                                style={{
                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                    boxShadow: '0 10px 40px rgba(37, 211, 102, 0.25)',
                                    transform: 'translateZ(0)',
                                    willChange: 'transform, box-shadow',
                                }}
                                whileHover={{
                                    y: -3,
                                    boxShadow: '0 15px 50px rgba(37, 211, 102, 0.35)',
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </motion.a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
