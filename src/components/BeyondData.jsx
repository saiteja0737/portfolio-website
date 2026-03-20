import { motion } from 'framer-motion'

const poemLines = [
  'An excused escape from an engulfing avalanche',
  'To a subtly serene, soothing city serving sublime surprises',
  'Its chameleon character commanding constant curiosity',
  'Beckoning Bay basking in blemishless beauty',
  'Golden gate gladly greeting gracious guests',
  'In an irresistibly audacious international orange',
  'Cruises crediting the currents for their chaotic yet compelling charisma',
  'Resilient redwoods radiating ravishing reflections, rising over remarkable ranges',
  'Soaring skyscrapers striving to shine on the scintillating skyline',
  'History hiding in every hue; from hills and harbors',
  'to cable cars and chocolate bars',
  'Axis of accelerating AI acing elusive algorithms',
  'Techies\' tapestry trending with terrific triumph',
  'Regular cars racing at rampant rates',
  'as Robocars revolutionize with robust Radars',
  'Buena burgeoning with boisterous brilliance',
  'Melting many with mind-boggling magnificence!',
]

export default function BeyondData() {
  return (
    <>
      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <motion.section
        id="beyond-data"
        className="bg-[#f8f9fa]"
        style={{ padding: '80px 60px 96px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Heading */}
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2
              className="font-bold text-[#0f2044]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px' }}
            >
              Beyond the Data
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">

            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              style={{ flex: '0 0 auto', width: '100%', maxWidth: 420, display: 'flex', position: 'relative', borderRadius: 16, overflow: 'hidden' }}
            >
              <img
                src="/portfolio-website/goldengate.jpg"
                alt="San Francisco"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 600,
                  objectFit: 'cover',
                  borderRadius: 16,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  display: 'block',
                  filter: 'saturate(1.1) contrast(1.05)',
                }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 16,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.2) 100%)',
                pointerEvents: 'none',
              }} />
            </motion.div>

            {/* Right: poem */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {/* Intro */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                color: '#4b5563',
                fontStyle: 'italic',
                marginBottom: 16,
              }}>
                I enjoy singing Carnatic music and writing poems that capture places, moments, and emotions.
              </p>

              {/* Poem title */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: '#0f2044',
                lineHeight: 1.2,
              }}>
                San Francisco
              </h3>

              {/* Poem text */}
              <div style={{ marginTop: 4 }}>
                {poemLines.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 14,
                      lineHeight: 2.2,
                      color: '#6b7280',
                      margin: 0,
                      marginBottom: 6,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Author credit */}
              <p style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 18,
                color: '#1e3a5f',
                marginTop: 8,
              }}>
                — Sai Teja Adusumilli
              </p>

            </motion.div>
          </div>

        </div>
      </motion.section>
    </>
  )
}
