import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaCode } from 'react-icons/fa'
import avatar from '../assets/avatar.png'

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '64px',
      }}
    >
      {/* BG glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 55% 55% at 50% 35%, rgba(124,58,237,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="page-container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>

        {/* ── Row 1: Avatar + Headline ─────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '48px',
            marginBottom: '64px',
            flexWrap: 'wrap',
          }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', flexShrink: 0, width: '260px', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Wide outer glow */}
            <div style={{
              position: 'absolute', inset: '-30px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(99,102,241,0.12) 45%, transparent 70%)',
              filter: 'blur(32px)',
              pointerEvents: 'none',
            }} />

            {/* Mid pink accent glow */}
            <div style={{
              position: 'absolute', bottom: '-10px', left: '50%',
              transform: 'translateX(-50%)',
              width: '160px', height: '80px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(236,72,153,0.20) 0%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }} />

            {/* Dark circular backing plate (sits BEHIND the image) */}
            <div style={{
              position: 'absolute',
              width: '230px', height: '230px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 30%, rgba(109,40,217,0.22) 0%, rgba(10,10,25,0.80) 65%)',
              border: '1px solid rgba(139,92,246,0.20)',
              boxShadow: '0 0 0 1px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.05)',
            }} />

            {/* Orbiting accent dots */}
            {[
              { angle: 45,  r: 118, size: '8px',  color: '#8b5cf6', delay: 0 },
              { angle: 160, r: 118, size: '6px',  color: '#6366f1', delay: 0.9 },
              { angle: 285, r: 118, size: '7px',  color: '#ec4899', delay: 1.7 },
            ].map((dot, i) => {
              const rad = (dot.angle * Math.PI) / 180
              return (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${Math.cos(rad) * dot.r}px - 4px)`,
                    top:  `calc(50% + ${Math.sin(rad) * dot.r}px - 4px)`,
                    width: dot.size, height: dot.size,
                    borderRadius: '50%',
                    background: dot.color,
                    boxShadow: `0 0 10px 3px ${dot.color}88`,
                  }}
                />
              )
            })}

            {/* Avatar image — floats on top of everything */}
            <motion.img
              src={avatar}
              alt="Avatar"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              style={{
                position: 'relative',
                width: '230px',
                height: '230px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 6px 20px rgba(139,92,246,0.55)) drop-shadow(0 18px 40px rgba(0,0,0,0.55))',
                zIndex: 1,
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ flex: 1, minWidth: '260px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '24px', height: '1px', background: 'rgba(168,85,247,0.6)' }} />
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                Hello! I Am{' '}
                <span style={{ color: '#a855f7', fontWeight: 600 }}>Naveed Latif</span>
              </p>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
              A Designer who
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.15, color: '#fff', marginBottom: '10px' }}>
              Judges a book
              <br />
              by its{' '}
              <span style={{ color: '#a855f7', fontStyle: 'italic', borderBottom: '3px solid #7c3aed', paddingBottom: '2px' }}>
                cover
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>…</span>
            </h1>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)' }}>
              Because if the cover does not impress you what else can?
            </p>
          </motion.div>
        </div>

        {/* ── Row 2: Role + Bio ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
            I'm a{' '}
            <TypeAnimation
              sequence={['Electrical Engineer.', 2200, 'UI/UX Designer.', 2200, 'Front-End Developer.', 2200]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              style={{ color: '#a855f7' }}
            />
          </h2>

          <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', flexWrap: 'wrap' }}>
            Currently, I'm a Front-end Developer at{' '}
            <FaCode style={{ color: '#1877f2', flexShrink: 0 }} />
            <a
              href="#"
              style={{ color: '#a855f7', fontWeight: 600, textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a855f7')}
            >
              Riemann Systems
            </a>
            ,
          </p>

          <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', maxWidth: '520px' }}>
            A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
