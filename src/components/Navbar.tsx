import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Nav link definitions ─────────────────────────────── */
const navLinks = [
  {
    label: 'Home',
    href: '#home',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'About',
    href: '#about',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: 'Work',
    href: '#work',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: 'Lab',
    href: '#lab',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

/* ── Component ────────────────────────────────────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active section via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibilityMap: Record<string, number> = {}

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio
          // pick the section with the highest visibility
          const best = Object.entries(visibilityMap).sort((a, b) => b[1] - a[1])[0]
          if (best && best[1] > 0) setActiveSection(best[0])
        },
        { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
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
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: scrolled ? 'rgba(10,8,24,0.94)' : 'rgba(10,8,24,0.45)',
          borderBottom: scrolled
            ? '1px solid rgba(168,85,247,0.3)'
            : '1px solid rgba(168,85,247,0.1)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        {/* Top accent gradient line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.7) 40%, rgba(99,102,241,0.7) 60%, transparent 100%)',
          }}
        />

        <div
          className="page-container"
          style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* ── Logo ─────────────────────────────────── */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.06 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              cursor: 'pointer',
              userSelect: 'none',
              flexShrink: 0,
            }}
            className="group"
          >
            {/* Logo mark */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'rgba(168,85,247,0.35)',
                  filter: 'blur(8px)',
                  transform: 'scale(1.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="group-hover:opacity-100"
              />
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(99,102,241,0.25))',
                  border: '1px solid rgba(168,85,247,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
                  <text x="4" y="27" fontSize="26" fontWeight="900" fontFamily="Inter, sans-serif" fill="url(#ngl)">N</text>
                  <defs>
                    <linearGradient id="ngl" x1="0" y1="0" x2="36" y2="36">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #a855f7, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.01em',
                }}
              >
                Naveed
              </span>
              <span style={{ fontSize: '9px', fontWeight: 500, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Portfolio
              </span>
            </div>
          </motion.a>

          {/* ── Desktop nav links ─────────────────────── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 14px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.55)',
                    background: isActive ? 'rgba(168,85,247,0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(168,85,247,0.3)' : '1px solid transparent',
                    transition: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {/* Icon */}
                  <span
                    style={{
                      display: 'flex',
                      color: isActive ? '#a855f7' : 'rgba(255,255,255,0.35)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.icon}
                  </span>
                  {link.label}

                  {/* Active bottom dot */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#a855f7',
                        boxShadow: '0 0 6px #a855f7',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </nav>

          {/* ── CTA + Mobile toggle ───────────────────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '8px 20px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                color: '#e9d5ff',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.22), rgba(99,102,241,0.18))',
                border: '1px solid rgba(168,85,247,0.45)',
                boxShadow: '0 0 16px rgba(139,92,246,0.12)',
                transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(139,92,246,0.3)'
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 16px rgba(139,92,246,0.12)'
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hire Me
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                padding: '6px',
              }}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile dropdown ──────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 49,
              background: 'rgba(10,8,24,0.97)',
              borderBottom: '1px solid rgba(168,85,247,0.2)',
              backdropFilter: 'blur(20px)',
              padding: '12px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: activeSection === link.href.slice(1) ? '#e9d5ff' : 'rgba(255,255,255,0.6)',
                  background: activeSection === link.href.slice(1) ? 'rgba(168,85,247,0.12)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >
                <span style={{ color: activeSection === link.href.slice(1) ? '#a855f7' : 'rgba(255,255,255,0.3)' }}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
