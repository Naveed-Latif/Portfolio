import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = ['React', 'TypeScript', 'Node.js', 'Figma', 'Python', 'AWS', 'GraphQL', 'Docker']

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '∞', label: 'Lines of Code' },
]

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section">
      <div ref={ref} className="page-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>

          {/* ── Left col ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '12px' }}>
              About Me
            </p>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '20px', lineHeight: 1.3 }}>
              Crafting digital{' '}
              <span className="text-gradient">experiences</span>
            </h2>
            <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
              I'm a passionate developer and designer. With 3+ years of experience, I specialize
              in building beautiful, functional products that delight users and drive results.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', marginBottom: '28px' }}>
              I believe great design is invisible — it just works, feels right, and solves real problems.
            </p>
            {/* Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-chip"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ── Right col: stats ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="card-glass"
                whileHover={{ scale: 1.04, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  padding: '28px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <div className="text-gradient" style={{ fontSize: '36px', fontWeight: 900, marginBottom: '6px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.45)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
