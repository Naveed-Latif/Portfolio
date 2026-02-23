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
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 50% at 50% 60%, rgba(124,58,237,0.1) 0%, transparent 70%)',
        }}
      />
      <div className="page-container relative">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-[28px] font-bold text-white mb-8"
        >
          Work Experience
        </motion.h2>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {workItems.map((item, i) => (
            <motion.div
              key={i}
              className="card-glass p-5 flex items-center gap-4"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl border border-purple-500/25"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(59,130,246,0.25))',
                }}
              >
                {icons[i]}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-white/40 leading-relaxed mb-3">
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
