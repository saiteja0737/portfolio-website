import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const cards = [
  {
    label: 'Email',
    detail: 'akhilasaiteja97@gmail.com',
    href: 'mailto:akhilasaiteja97@gmail.com',
    Icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    detail: 'linkedin.com/in/adsteja',
    href: 'https://www.linkedin.com/in/adsteja',
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    detail: 'github.com/saiteja0737',
    href: 'https://github.com/saiteja0737',
    Icon: FaGithub,
  },
]

export default function Contact() {
  return (
    <>
      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <section id="contact" className="bg-[#f8f9fa]" style={{ padding: '80px 60px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Heading */}
          <motion.div
            className="text-center"
            style={{ marginBottom: 16 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-bold text-[#0f2044]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px' }}
            >
              Let's Talk
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16,
              color: '#4b5563',
              marginBottom: 40,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm currently open to new opportunities — always happy to connect and chat about data, AI, and problem-solving.
          </motion.p>

          {/* Let's Connect button */}
          <div className="text-center" style={{ marginBottom: 40 }}>
            <motion.a
              href="mailto:adusumillisaiteja@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ backgroundColor: '#2d5a8e' }}
              style={{
                display: 'inline-block',
                background: '#1e3a5f',
                color: 'white',
                borderRadius: 50,
                padding: '14px 40px',
                fontSize: 16,
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
            >
              Let's Connect!
            </motion.a>
          </div>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {cards.map((card, i) => {
              const Icon = card.Icon
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(30,58,95,0.15)', transition: { duration: 0.2 } }}
                  style={{
                    background: 'white',
                    borderRadius: 16,
                    boxShadow: '0 2px 12px rgba(30,58,95,0.07)',
                    border: '1px solid #e5e7eb',
                    padding: '32px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    textDecoration: 'none',
                    minWidth: 200,
                  }}
                >
                  <Icon size={48} color="#1e3a5f" />
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#0f2044',
                  }}>
                    {card.label}
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    color: '#4b5563',
                    textAlign: 'center',
                  }}>
                    {card.detail}
                  </span>
                </motion.a>
              )
            })}
          </div>

          {/* Footer */}
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#9ca3af' }}>
              © 2026 Sai Teja Adusumilli — Built with React
            </span>
          </div>

        </div>
      </section>
    </>
  )
}
