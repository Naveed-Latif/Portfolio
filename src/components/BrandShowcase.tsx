import { motion } from 'framer-motion'

const BrandShowcase = () => {
  return (
    <section
      style={{
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '420px',
      }}
    >
      {/* Deep radial bg glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(124,58,237,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Orbital ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          border: '1px solid rgba(168,85,247,0.25)',
          boxShadow: '0 0 40px rgba(124,58,237,0.15), inset 0 0 40px rgba(59,130,246,0.05)',
        }}
      />
      {/* Inner orbital ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          border: '1px solid rgba(59,130,246,0.2)',
        }}
      />

      {/* Orbiting dot on outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: '340px', height: '340px' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '-4px',
            transform: 'translateY(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#a855f7',
            boxShadow: '0 0 12px #a855f7',
          }}
        />
      </motion.div>

      {/* Orbiting dot on inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: '220px', height: '220px' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-4px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#3b82f6',
            boxShadow: '0 0 10px #3b82f6',
          }}
        />
      </motion.div>

      {/* Centre logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          width: '100px',
          height: '100px',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(10,8,24,0.9)',
          border: '1px solid rgba(168,85,247,0.4)',
          boxShadow: '0 0 60px rgba(124,58,237,0.35)',
        }}
      >
        <svg width="64" height="64" viewBox="0 0 36 36" fill="none">
          <text x="2" y="28" fontSize="28" fontWeight="900" fontFamily="Inter, sans-serif" fill="url(#nbig)">N</text>
          <defs>
            <linearGradient id="nbig" x1="0" y1="0" x2="36" y2="36">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  )
}

export default BrandShowcase
