import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const labProjects = [
  { emoji: '🎨', title: 'Design System', desc: 'A comprehensive component library built from scratch with accessibility in mind.' },
  { emoji: '🤖', title: 'AI Dashboard', desc: 'Real-time analytics powered by machine learning models and live data streams.' },
  { emoji: '🌊', title: 'Wave Generator', desc: 'Interactive SVG animation playground built with pure canvas and WebGL.' },
]

const Lab = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="lab" className="section">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 55% 40% at 50% 85%, rgba(59,130,246,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div ref={ref} className="page-container" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '32px' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '8px' }}>
            My Lab
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff' }}>Experiments & Projects</h2>
        </motion.div>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {labProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="card-glass"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ fontSize: '30px', marginBottom: '12px' }}>{proj.emoji}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{proj.title}</h3>
              <p style={{ fontSize: '12px', lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', flex: 1 }}>
                {proj.desc}
              </p>
              <motion.button
                className="btn-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                style={{ marginTop: '16px', alignSelf: 'flex-start' }}
              >
                VIEW PROJECT
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lab
