import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'About', 'Lab']

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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[16px] transition-[background,border-color] duration-300"
      style={{
        background: scrolled
          ? 'rgba(10,8,24,0.92)'
          : 'rgba(10,8,24,0.4)',
        borderBottom: scrolled
          ? '1px solid rgba(168,85,247,0.35)'
          : '1px solid rgba(168,85,247,0.12)',
      }}
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div className="page-container h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="cursor-pointer select-none shrink-0 flex items-center gap-2 group"
        >
          <div className="relative">
            {/* Glow behind logo */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg className="relative" width="34" height="34" viewBox="0 0 36 36" fill="none">
              <text x="2" y="28" fontSize="28" fontWeight="900" fontFamily="Inter, sans-serif" fill="url(#ng1)">N</text>
              <defs>
                <linearGradient id="ng1" x1="0" y1="0" x2="36" y2="36">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Optional wordmark */}
          <span
            className="text-[13px] font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
            style={{ background: 'linear-gradient(90deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Naveed
          </span>
        </motion.div>

        {/* Nav Links */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -1 }}
              className="relative px-5 py-2 text-sm font-medium tracking-wide no-underline rounded-lg group transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {/* Hover bg pill */}
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.06] transition-colors duration-200" />
              <span className="relative">{link}</span>
            </motion.a>
          ))}

          {/* CTA button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="ml-5 rounded-lg text-sm font-semibold tracking-wide no-underline border border-purple-500/50 text-purple-300 transition-all duration-200 hover:border-purple-400/70 hover:text-white"
            style={{
              padding: '8px 22px',
              background: 'rgba(139,92,246,0.10)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
