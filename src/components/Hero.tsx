import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaCode } from 'react-icons/fa'
import avatar from '../assets/avatar.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-16"
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 35%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="page-container py-16">

        {/* ── Row 1: Avatar + Headline ─────────────────────── */}
        <div className="flex flex-row items-center gap-12 mb-16 flex-wrap">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0 w-[260px] h-[260px] flex items-center justify-center"
          >
            {/* Wide outer glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: '-30px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(99,102,241,0.12) 45%, transparent 70%)',
                filter: 'blur(32px)',
              }}
            />

            {/* Mid pink accent glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                bottom: '-10px', left: '50%',
                transform: 'translateX(-50%)',
                width: '160px', height: '80px',
                background: 'radial-gradient(ellipse, rgba(236,72,153,0.20) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Dark circular backing plate */}
            <div
              className="absolute w-[230px] h-[230px] rounded-full border border-violet-500/20"
              style={{
                background: 'radial-gradient(circle at 40% 30%, rgba(109,40,217,0.22) 0%, rgba(10,10,25,0.80) 65%)',
                boxShadow: '0 0 0 1px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            />

            {/* Orbiting accent dots */}
            {[
              { angle: 45,  r: 118, size: '8px', color: '#8b5cf6', delay: 0 },
              { angle: 160, r: 118, size: '6px', color: '#6366f1', delay: 0.9 },
              { angle: 285, r: 118, size: '7px', color: '#ec4899', delay: 1.7 },
            ].map((dot, i) => {
              const rad = (dot.angle * Math.PI) / 180
              return (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
                  className="absolute rounded-full"
                  style={{
                    left: `calc(50% + ${Math.cos(rad) * dot.r}px - 4px)`,
                    top:  `calc(50% + ${Math.sin(rad) * dot.r}px - 4px)`,
                    width: dot.size, height: dot.size,
                    background: dot.color,
                    boxShadow: `0 0 10px 3px ${dot.color}88`,
                  }}
                />
              )
            })}

            {/* Avatar image */}
            <motion.img
              src={avatar}
              alt="Avatar"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="relative w-[230px] h-[230px] object-contain z-10"
              style={{
                filter: 'drop-shadow(0 6px 20px rgba(139,92,246,0.55)) drop-shadow(0 18px 40px rgba(0,0,0,0.55))',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 min-w-[260px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-px" style={{ background: 'rgba(168,85,247,0.6)' }} />
              <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Hello! I Am{' '}
                <span className="text-purple-500 font-semibold">Naveed Latif</span>
              </p>
            </div>
            <p className="text-[13px] mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              A Designer who
            </p>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-tight text-white mb-2.5">
              Judges a book
              <br />
              by its{' '}
              <span
                className="italic"
                style={{ color: '#a855f7', borderBottom: '3px solid #7c3aed', paddingBottom: '2px' }}
              >
                cover
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>…</span>
            </h1>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
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
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold text-white mb-3">
            I'm a{' '}
            <TypeAnimation
              sequence={['Electrical Engineer.', 2200, 'UI/UX Designer.', 2200, 'Front-End Developer.', 2200]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              style={{ color: '#a855f7' }}
            />
          </h2>

          <p
            className="flex items-center gap-1.5 text-[13px] mb-5 flex-wrap"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Currently, I'm a Front-end Developer at{' '}
            <FaCode className="text-blue-500 shrink-0" />
            <a
              href="#"
              className="font-semibold no-underline"
              style={{ color: '#a855f7' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a855f7')}
            >
              Riemann Systems
            </a>
            ,
          </p>

          <p
            className="text-sm leading-[1.75] max-w-[520px]"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
