import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'

export default function Chef() {
    return (
        <section className="relative overflow-hidden py-32">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream-dark via-ivory to-cream" />

            <div className="container relative z-10 mx-auto px-4">
                <ScrollReveal direction="down">
                    <div className="mb-12 text-center sm:mb-16">
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
                            Meet Our Chef
                        </h2>


                        {/* Elegant Divider */}
                        <div className="mx-auto mt-6 flex items-center justify-center gap-3 sm:mt-8">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-saffron/30 sm:w-16" />
                            <div className="h-1 w-1 rounded-full bg-saffron sm:h-1.5 sm:w-1.5" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-saffron/30 sm:w-16" />
                        </div>
                    </div>
                </ScrollReveal>

                <div className="mx-auto max-w-5xl">
                    <ScrollReveal direction="up">
                        <motion.div
                            className="overflow-hidden rounded-3xl transition-all"
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.12)',
                            }}
                            whileHover={{
                                boxShadow: '0 12px 48px rgba(31, 38, 135, 0.18)',
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="grid gap-8 p-10 md:grid-cols-5 md:gap-12 md:p-16">
                                {/* Chef Image Placeholder */}
                                <div className="md:col-span-2">
                                    <div
                                        className="relative aspect-square overflow-hidden rounded-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%)',
                                            border: '2px solid rgba(255, 107, 53, 0.2)',
                                        }}
                                    >
                                        <div className="flex h-full items-center justify-center">
                                            <div className="text-center">
                                                <div className="mb-4 text-7xl">👩‍🍳</div>
                                                <p className="font-body text-sm text-charcoal/60">Chef Dhivya Dharshini</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chef Content */}
                                <div className="md:col-span-3">
                                    <h3
                                        className="mb-4 font-heading text-4xl font-bold md:text-5xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #C1121F 0%, #FF6B35 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        Dhivya Dharshini
                                    </h3>

                                    <p className="mb-6 font-tamil text-2xl font-semibold text-saffron">
                                        தீவ்யதர்ஷினி
                                    </p>

                                    <div className="space-y-4 font-body text-lg leading-relaxed text-charcoal/80">
                                        <p>
                                            The heart and soul of SK Tiffin Center, Chef Dhivya Dharshini is the master behind every authentic South Indian delicacy we serve.
                                        </p>

                                        <p>
                                            With years of culinary expertise and a deep passion for traditional Tamil cuisine, she transforms simple ingredients into extraordinary experiences. Every dosa is perfectly crisp, every idli cloud-soft, and every chutney bursting with authentic flavors.
                                        </p>

                                        <p>
                                            <strong className="text-charcoal">She is everything in food making</strong> — from selecting the finest ingredients to perfecting age-old recipes passed down through generations. Her dedication to quality and authenticity ensures that every meal feels like home.
                                        </p>

                                        <div className="mt-8 flex flex-wrap gap-3">
                                            {['Traditional Recipes', 'Fresh Ingredients', 'Made with Love'].map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full px-4 py-2 text-sm font-semibold"
                                                    style={{
                                                        background: 'rgba(255, 107, 53, 0.1)',
                                                        color: '#E85A2A',
                                                        border: '1px solid rgba(255, 107, 53, 0.2)',
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Quote Section */}
                    <ScrollReveal direction="up" delay={0.3}>
                        <motion.div
                            className="mt-12 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <p
                                className="mx-auto max-w-3xl font-heading text-2xl italic leading-relaxed text-charcoal/70 md:text-3xl"
                                style={{ letterSpacing: '-0.01em' }}
                            >
                                "Every dish is prepared with the same love and care I would give to my own family"
                            </p>
                            <p className="mt-4 font-body text-lg text-charcoal/60">— Chef Dhivya Dharshini</p>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
