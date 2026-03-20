import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

const roles = [
  'Data Analytics & AI Professional',
  'Data Scientist',
  'ML Engineer',
  'AI Enthusiast',
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adsteja',  icon: FaLinkedin },
  { label: 'GitHub',   href: 'https://github.com/saiteja0737',        icon: FaGithub   },
  { label: 'Email',    href: 'mailto:adusumillisaiteja@gmail.com',     icon: HiMail     },
]

function Typewriter() {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [phase,     setPhase]     = useState('typing')

  useEffect(() => {
    const current = roles[roleIdx]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 62)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('deleting'), 1900)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
        return () => clearTimeout(t)
      }
      setRoleIdx((i) => (i + 1) % roles.length)
      setPhase('typing')
    }
  }, [displayed, phase, roleIdx])

  return <span>{displayed}</span>
}

function ParticleCanvas() {
  const canvasRef = useRef(null)
  const animIdRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 25 }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      vx:      (Math.random() - 0.5) * 0.6,
      vy:      (Math.random() - 0.5) * 0.6,
      r:       1 + Math.random(),
      opacity: 0.1 + Math.random() * 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(15,32,68,${p.opacity})`
        ctx.fill()
      })
      animIdRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animIdRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default function HeroAbout() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        paddingTop: '70px',
        paddingBottom: '40px',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      <ParticleCanvas />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
      <div style={{
        width: '100%',
        maxWidth: 880,
        margin: '0 auto',
        padding: '0 60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '32px',
        flexWrap: 'wrap',
      }}>

        {/* Left column: text content */}
        <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* Hello, I'm */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '32px', color: '#4a5568', margin: 0, marginTop: '12px' }}
            className="leading-none"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 100, damping: 10 }}
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '80px', color: '#0f2044', margin: '4px 0 0 0', lineHeight: 1 }}
            className="font-semibold tracking-wide"
          >
            Sai Teja Adusumilli
          </motion.h1>

          {/* Role carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '28px', color: '#1e3a5f', marginTop: '7px', height: '36px', display: 'flex', alignItems: 'center' }}
          >
            <Typewriter />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ width: 40, height: 1, background: '#cbd5e1', marginTop: '12px', transformOrigin: 'left' }}
          />

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            style={{ fontFamily: "'Playfair Display', serif", color: '#374151', maxWidth: '480px', marginTop: '16px', fontSize: '18px', lineHeight: 1.8, fontWeight: 400 }}
          >
            A former banker who got curious about the patterns behind financial
            decisions and ended up diving into analytics. I enjoy working with
            messy data, spotting what others might miss, and turning it into
            something meaningful.
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: '12px' }}
          >
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                  className="flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors duration-200 hover:shadow-[0_6px_20px_rgba(30,58,95,0.25)]"
                  style={{ border: '2px solid #1e3a5f', borderRadius: '50%', padding: '14px' }}
                >
                  <Icon size={28} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            style={{ marginTop: '12px' }}
          >
            <motion.a
              href="/portfolio-website/resume.pdf"
              target="_blank"
              download="Sai_Teja_Adusumilli_Resume.pdf"
              whileHover={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
              style={{
                border: '2px solid #1e3a5f',
                borderRadius: '50px',
                padding: '12px 32px',
                fontSize: '15px',
                fontWeight: 600,
                background: 'transparent',
                color: '#1e3a5f',
                textDecoration: 'none',
              }}
            >
              <FaDownload size={14} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Beyond the Data link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            style={{ marginTop: '12px' }}
          >
            <button
              onClick={() => document.getElementById('beyond-data').scrollIntoView({ behavior: 'smooth' })}
              className="beyond-link"
              style={{
                background: 'none',
                border: 'none',
                color: '#4a6fa5',
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Beyond the Data ↓
            </button>
          </motion.div>

        </div>

        {/* Right column: photo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <img
            src="/portfolio-website/profile.jpg"
            alt="Sai Teja Adusumilli"
            style={{
              width: 272,
              height: 272,
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '3px solid #1e3a5f',
              boxShadow: '0 0 40px rgba(15,32,68,0.12), 0 8px 24px rgba(0,0,0,0.08)',
              imageOrientation: 'from-image',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'rgba(30,58,95,0.06)',
            filter: 'blur(32px)',
            transform: 'scale(1.6)',
            zIndex: -1,
          }} />
        </motion.div>

      </div>
      </div>
    </section>
  )
}
