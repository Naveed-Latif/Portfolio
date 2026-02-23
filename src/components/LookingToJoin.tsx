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
    <section className="py-20 text-center relative">
      <div className="page-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-[15px] leading-[1.8] mb-5"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          I'm currently looking to join a{' '}
          <span className="text-green-400 font-semibold">driven, functional</span>{' '}
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
          className="flex justify-center flex-wrap gap-[18px] mt-6"
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
              className="w-10 h-10 rounded-[10px] flex items-center justify-center bg-white/5 border border-white/[0.08] cursor-pointer text-[18px]"
              style={{ color }}
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
