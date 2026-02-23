import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import LookingToJoin from './components/LookingToJoin'
import BrandShowcase from './components/BrandShowcase'
import FeaturedProjects from './components/FeaturedProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        {/* 1. Hero — avatar + headline + typing role */}
        <Hero />

        {/* 2. Work Experience — 2×2 cards */}
        <WorkExperience />

        {/* 3. "Looking to join a team" — text + icon row */}
        <LookingToJoin />

        {/* 4. Brand Showcase — orbital logo centrepiece */}
        <BrandShowcase />

        {/* 5. Featured Projects — alternating layout */}
        <FeaturedProjects />

        {/* 6. Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
