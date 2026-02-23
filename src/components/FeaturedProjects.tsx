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
      style={{
        display: 'flex',
        flexDirection: imageRight ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '48px',
        marginBottom: '80px',
      }}
    >
      {/* Text side */}
      <div style={{ flex: '0 0 40%' }}>
        <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '8px' }}>
          {label}
        </p>
        <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '24px' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <motion.a
            href="#"
            whileHover={{ scale: 1.15, color: '#a855f7' }}
            style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', textDecoration: 'none' }}
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.15, color: '#a855f7' }}
            style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', textDecoration: 'none' }}
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </div>
      </div>

      {/* Image side */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
        style={{
          flex: '0 0 55%',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(124,58,237,0.25)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.1)',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
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
