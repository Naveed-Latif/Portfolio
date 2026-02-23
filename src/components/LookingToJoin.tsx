import { motion } from 'framer-motion'
import { FaFigma, FaReact, FaNodeJs, FaPython, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiFirebase, SiVercel } from 'react-icons/si'

const socialIcons = [
  { icon: FaFigma,       color: '#F24E1E', label: 'Figma'      },
  { icon: FaReact,       color: '#61DAFB', label: 'React'      },
  { icon: SiTypescript,  color: '#3178C6', label: 'TypeScript' },
  { icon: FaNodeJs,      color: '#68A063', label: 'Node.js'    },
  { icon: FaPython,      color: '#F7C948', label: 'Python'     },
  { icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind'   },
  { icon: SiFirebase,    color: '#FFCA28', label: 'Firebase'   },
  { icon: FaGithub,      color: '#ffffff', label: 'GitHub'     },
  { icon: FaTwitter,     color: '#1DA1F2', label: 'Twitter'    },
  { icon: SiVercel,      color: '#ffffff', label: 'Vercel'     },
  { icon: FaDribbble,    color: '#EA4C89', label: 'Dribbble'   },
]

const LookingToJoin = () => {
  return (
    <section style={{ padding: '80px 0', textAlign: 'center', position: 'relative' }}>
      <div className="page-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', marginBottom: '20px', lineHeight: 1.8 }}
        >
          I'm currently looking to join a{' '}
          <span style={{ color: '#4ade80', fontWeight: 600 }}>driven, functional</span>{' '}
          team
          <br />
          that values amazing people doing things and accessible design
        </motion.p>

        {/* Coloured tech/social icon strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '18px', marginTop: '24px' }}
        >
          {socialIcons.map(({ icon: Icon, color, label }, i) => (
            <motion.div
              key={label}
              title={label}
              whileHover={{ scale: 1.25, y: -4 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              style={{
                width: '40px', height: '40px',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                color,
                fontSize: '18px',
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LookingToJoin
