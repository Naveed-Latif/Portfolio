import { motion } from 'framer-motion'

const BrandShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden flex items-center justify-center min-h-[420px]">
      {/* Deep radial bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(124,58,237,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Orbital ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] h-[340px] rounded-full border border-purple-500/25"
        style={{
          boxShadow: '0 0 40px rgba(124,58,237,0.15), inset 0 0 40px rgba(59,130,246,0.05)',
        }}
      />

      {/* Inner orbital ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/20"
      />

      {/* Orbiting dot on outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] h-[340px]"
      >
        <div
          className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500"
          style={{ boxShadow: '0 0 12px #a855f7' }}
        />
      </motion.div>

      {/* Orbiting dot on inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[220px] h-[220px]"
      >
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
          style={{ boxShadow: '0 0 10px #3b82f6' }}
        />
      </motion.div>

      {/* Centre logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-[100px] h-[100px] rounded-[24px] flex items-center justify-center border border-purple-500/40"
        style={{
          background: 'rgba(10,8,24,0.9)',
          boxShadow: '0 0 60px rgba(124,58,237,0.35)',
        }}
      >
        <svg width="64" height="64" viewBox="0 0 36 36" fill="none" className='text-center'>
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
