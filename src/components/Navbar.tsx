import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(10, 8, 24, 0.92)' : 'rgba(10, 8, 24, 0.5)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.35)',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        className="page-container"
        style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.08 }} style={{ cursor: 'pointer', userSelect: 'none', flexShrink: 0 }}>
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
            <text x="2" y="28" fontSize="28" fontWeight="900" fontFamily="Inter, sans-serif" fill="url(#ng1)">N</text>
            <defs>
              <linearGradient id="ng1" x1="0" y1="0" x2="36" y2="36">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Home', 'About', 'Lab'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -2 }}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
