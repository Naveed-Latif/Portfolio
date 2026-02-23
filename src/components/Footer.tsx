import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
]

const Footer = () => (
  <footer
    style={{
      borderTop: '1px solid rgba(124,58,237,0.2)',
      background: 'rgba(0,0,0,0.25)',
    }}
  >
    <div
      className="page-container"
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
          <text x="2" y="28" fontSize="28" fontWeight="900" fontFamily="Inter, sans-serif" fill="url(#ng2)">N</text>
          <defs>
            <linearGradient id="ng2" x1="0" y1="0" x2="36" y2="36">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
        © {new Date().getFullYear()} Your Name · Crafted with ♥
      </p>

      {/* Socials */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: 'rgba(255,255,255,0.38)', display: 'flex', alignItems: 'center' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#a855f7')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.38)')}
          >
            <Icon size={17} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
