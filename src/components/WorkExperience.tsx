import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Senior Product Designer',
    company: 'Nexus Creative Studio',
    period: 'Jan 2023 – Present',
    type: 'Full-time',
    icon: '🎨',
    color: 'rgba(168,85,247,0.85)',
    glow: 'rgba(168,85,247,0.18)',
    bullets: [
      'Led end-to-end design for 3 flagship SaaS products serving 100k+ users.',
      'Built and maintained a cross-platform design system adopted by 8 engineers.',
      'Ran user research sprints that reduced onboarding drop-off by 34%.',
    ],
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
  },
  {
    role: 'UI/UX Designer',
    company: 'Orbit Labs',
    period: 'Jun 2021 – Dec 2022',
    type: 'Full-time',
    icon: '🚀',
    color: 'rgba(99,102,241,0.85)',
    glow: 'rgba(99,102,241,0.18)',
    bullets: [
      'Designed responsive interfaces for mobile and web across 5 client projects.',
      'Collaborated with developers in two-week agile sprints, cutting revision cycles by 40%.',
      'Created motion guidelines that improved perceived performance scores.',
    ],
    skills: ['Sketch', 'InVision', 'Agile', 'Motion Design'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Pixel & Co.',
    period: 'Mar 2020 – May 2021',
    type: 'Part-time',
    icon: '💻',
    color: 'rgba(59,130,246,0.85)',
    glow: 'rgba(59,130,246,0.18)',
    bullets: [
      'Built marketing landing pages with React and Tailwind, improving load times by 28%.',
      'Maintained and extended a WordPress multisite network for 12 clients.',
      'Integrated REST APIs and handled front-end state with Redux.',
    ],
    skills: ['React', 'Tailwind CSS', 'WordPress', 'REST APIs'],
  },
]

const WorkExperience = () => {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="work" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(124,58,237,0.09) 0%, transparent 70%)',
        }}
      />

      <div className="page-container relative">
        {/* ── Section header ─────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '56px' }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#a855f7',
              background: 'rgba(168,85,247,0.12)',
              border: '1px solid rgba(168,85,247,0.3)',
              borderRadius: '999px',
              padding: '4px 14px',
              marginBottom: '14px',
            }}
          >
            Career Path
          </span>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 36px)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#fff',
            }}
          >
            Work{' '}
            <span className="text-gradient">Experience</span>
          </h2>
          <p
            style={{
              marginTop: '10px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.45)',
              maxWidth: '480px',
            }}
          >
            A journey of crafting thoughtful digital experiences across design and development.
          </p>
        </motion.div>

        {/* ── Timeline ────────────────────────────────── */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '19px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(168,85,247,0.6), rgba(99,102,241,0.3), transparent)',
              borderRadius: '2px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {experiences.map((exp, i) => (
              <TimelineCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Individual timeline card ───────────────────────────────── */
interface Exp {
  role: string
  company: string
  period: string
  type: string
  icon: string
  color: string
  glow: string
  bullets: string[]
  skills: string[]
}

const TimelineCard = ({ exp, index }: { exp: Exp; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${exp.color}, rgba(99,102,241,0.6))`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          boxShadow: `0 0 20px ${exp.glow}`,
          zIndex: 1,
        }}
      >
        {exp.icon}
      </div>

      {/* Card */}
      <motion.div
        className="card-glass"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        style={{
          flex: 1,
          padding: '22px 24px',
          borderLeft: `3px solid ${exp.color}`,
          borderRadius: '14px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '8px',
            marginBottom: '6px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
              {exp.role}
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
              {exp.company}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.04em',
              }}
            >
              {exp.period}
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#a855f7',
                background: 'rgba(168,85,247,0.12)',
                border: '1px solid rgba(168,85,247,0.28)',
                borderRadius: '999px',
                padding: '2px 10px',
              }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            margin: '14px 0',
          }}
        />

        {/* Bullet points */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px' }}>
          {exp.bullets.map((b, bi) => (
            <li key={bi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span
                style={{
                  marginTop: '6px',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: exp.color,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Skill chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {exp.skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WorkExperience
