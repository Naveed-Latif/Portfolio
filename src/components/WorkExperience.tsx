import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const icons = ['💜', '🧠', '🚀', '🌐']

const workItems = [
  { title: 'Product Design', subtitle: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.' },
  { title: 'Brand Strategy', subtitle: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.' },
  { title: 'Motion Design', subtitle: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.' },
  { title: 'Web Development', subtitle: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.' },
]

const WorkExperience = () => {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="section">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 50% at 50% 60%, rgba(124,58,237,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="page-container" style={{ position: 'relative' }}>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '32px' }}
        >
          Work Experience
        </motion.h2>

        {/* 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {workItems.map((item, i) => (
            <motion.div
              key={i}
              className="card-glass"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
            >
              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(59,130,246,0.25))',
                  border: '1px solid rgba(168,85,247,0.25)',
                }}
              >
                {icons[i]}
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#a855f7', flexShrink: 0,
                    }}
                  />
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, marginBottom: '12px' }}>
                  {item.subtitle}
                </p>
                <motion.button
                  className="btn-purple"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  LEARN MORE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
