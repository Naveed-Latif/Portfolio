import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import mockup1 from '../assets/mockup1.png'
import mockup2 from '../assets/mockup2.png'

const projects = [
  {
    label: 'Featured Project',
    title: 'Example Project',
    desc: 'A web app for a smart, personalised to-do lists. View your top tasks, track habits, recently played tracks, and candid close-up photos of your friends. The product was designed to help you learn more and think about new ways of making digital products.',
    image: mockup1,
    imageRight: true,
  },
  {
    label: 'Personal Project',
    title: 'Example Project',
    desc: 'A web app for a smart, personalised to-do lists. View your top tasks, track habits, recently played tracks, and close-up photos. The product was designed to help you learn more and think about new ways of making digital products.',
    image: mockup2,
    imageRight: false,
  },
]

interface ProjectCardProps {
  label: string
  title: string
  desc: string
  image: string
  imageRight: boolean
  index: number
}

const ProjectCard = ({ label, title, desc, image, imageRight, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex ${imageRight ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 mb-20`}
    >
      {/* Text side */}
      <div className="basis-[40%] shrink-0">
        <p className="text-[11px] font-semibold tracking-[0.09em] uppercase text-purple-500 mb-2">
          {label}
        </p>
        <h3 className="text-[26px] font-bold text-white mb-4">{title}</h3>
        <p className="text-[13px] leading-[1.8] mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {desc}
        </p>
        <div className="flex gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.15, color: '#a855f7' }}
            className="flex items-center gap-1.5 text-[13px] no-underline"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.15, color: '#a855f7' }}
            className="flex items-center gap-1.5 text-[13px] no-underline"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </div>
      </div>

      {/* Image side */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
        className="basis-[55%] shrink-0 rounded-2xl overflow-hidden border border-violet-600/25"
        style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.1)',
        }}
      >
        <img src={image} alt={title} className="w-full block object-cover" />
      </motion.div>
    </motion.div>
  )
}

const FeaturedProjects = () => {
  return (
    <section id="projects" className="section">
      <div className="page-container">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} index={i} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
