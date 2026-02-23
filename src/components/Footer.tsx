import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const socials = [
  { icon: FaGithub,   href: '#', label: 'GitHub'   },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn'  },
  { icon: FaTwitter,  href: '#', label: 'Twitter'   },
  { icon: FaDribbble, href: '#', label: 'Dribbble'  },
]

const Footer = () => (
  <footer className="border-t border-violet-600/20 bg-black/25">
    <div className="page-container h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="shrink-0">
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
      <p className="text-xs text-white/30">
        © {new Date().getFullYear()} Your Name · Crafted with ♥
      </p>

      {/* Socials */}
      <div className="flex items-center gap-4 shrink-0">
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
            style={{ color: 'rgba(255,255,255,0.38)' }}
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
