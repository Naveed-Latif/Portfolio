import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact"  style={{
      marginBottom: '20px',
      paddingTop: '20px',
      paddingBottom: '20px',

    }}>
      <div ref={ref} className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[26px] font-bold text-white mb-4">Contact</h2>
          <p
            className="text-[13px] leading-[1.8] max-w-[480px] mb-3"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            I'm always open to new projects and opportunities. Whether you have a question or just
            want to say hi, feel free to reach out — I'll try my best to get back to you!
          </p>
          <a
            href="mailto:naveedlatifccw113@gmail.com"
            className="text-sm block mb-6 no-underline"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            naveedlatifccw113@gmail.com
          </a>

          {/* Social icons */}
          <div className="flex gap-5">
            {[
              { icon: FaGithub,   href: 'https://github.com/Naveed-Latif', label: 'GitHub'   },
              { icon: FaTwitter,  href: 'https://x.com/NaveedLatif113', label: 'Twitter'  },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/naveed-latif', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target='_blank'
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                className="flex items-center"
                style={{ color: 'rgba(255,255,255,0.4)' }}
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
