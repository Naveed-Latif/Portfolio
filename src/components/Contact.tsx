import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" style={{ padding: '80px 0 60px' }}>
      <div ref={ref} className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Contact
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: '480px', marginBottom: '12px' }}>
            I'm always open to new projects and opportunities. Whether you have a question or just
            want to say hi, feel free to reach out — I'll try my best to get back to you!
          </p>
          <a
            href="mailto:hello@yourname.com"
            style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '24px', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            hello@yourname.com
          </a>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { icon: FaGithub,   href: '#', label: 'GitHub'   },
              { icon: FaTwitter,  href: '#', label: 'Twitter'  },
              { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                style={{ color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#a855f7')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
