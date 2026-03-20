import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const NAVBAR_HEIGHT = 80

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeId,   setActiveId]   = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace('#', ''))
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: `-${NAVBAR_HEIGHT}px 0px -50% 0px`, threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <style>{`
        .nav-link-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.025em;
          color: #0f2044;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #0f2044;
          transition: width 0.3s ease;
        }
        .nav-link-btn:hover::after,
        .nav-link-btn.active::after {
          width: 100%;
        }
        .nav-link-btn.active {
          color: #0f2044;
        }
        .nav-link-btn:not(.active) {
          color: #1e3a5f;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
        }`}
      >
        <nav className="w-full px-8 h-[72px] flex items-center justify-center relative">

          {/* Desktop: centered nav links */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-10"
          >
            {links.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`nav-link-btn${isActive ? ' active' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </motion.ul>

          {/* Mobile: hamburger pinned right */}
          <button
            className="md:hidden absolute right-8 text-[#1e3a5f] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <ul className="flex flex-col py-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="w-full text-left px-8 py-3.5 text-sm font-medium text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
