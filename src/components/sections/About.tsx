import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'

export default function About() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal direction="left">
              <div className="mb-8">
                <motion.div
                  className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold to-maroon"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <h2 className="mb-6 font-heading text-4xl font-bold text-maroon md:text-5xl">
                  Our Story
                </h2>
                <p className="font-tamil text-2xl text-brown-light">எங்கள் கதை</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="font-tamil text-lg leading-relaxed text-brown">
                  25 ஆண்டுகளுக்கும் மேலாக, SK சைவ உணவகம் அம்பத்தூரில் பாரம்பரிய தமிழ் சுவையை பரிமாறி வருகிறது. 
                  எங்கள் இட்லி, தோசை மற்றும் பொங்கல் ஒவ்வொன்றும் அன்பு மற்றும் பாரம்பரிய முறைகளுடன் தயாரிக்கப்படுகிறது.
                </p>

                {/* Kolam Divider */}
                <motion.div
                  className="flex justify-center py-4"
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <svg width="80" height="40" viewBox="0 0 80 40" className="text-gold">
                    <motion.path
                      d="M 10 20 L 30 10 L 50 20 L 70 10 M 10 20 L 30 30 L 50 20 L 70 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                    <motion.circle
                      cx="40"
                      cy="20"
                      r="5"
                      fill="currentColor"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  </svg>
                </motion.div>

                <p className="font-body text-lg leading-relaxed text-brown-light">
                  For over 25 years, SK Tiffin Center has been serving authentic South Indian 
                  vegetarian cuisine in Ambattur. Every dish is prepared with love, using 
                  traditional methods passed down through generations. Our commitment to quality 
                  and authentic flavors has made us a beloved breakfast destination.
                </p>

                {/* Counter */}
                <motion.div
                  className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-gold/10 to-maroon/10 p-6"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold">
                    <motion.span
                      className="font-heading text-3xl font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      25+
                    </motion.span>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-maroon">Years</p>
                    <p className="font-body text-sm text-brown-light">of Excellence</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Content */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/sasikala_kitchen.jpeg"
                  alt="SK Tiffin Center"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute bottom-6 left-6 rounded-full bg-white/90 px-6 py-3 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-heading text-lg font-bold text-maroon">
                    ⭐ Customer Favorite
                  </p>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-maroon/20 blur-2xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
