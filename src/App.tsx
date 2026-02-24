import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import LookingToJoin from './components/LookingToJoin'
import BrandShowcase from './components/BrandShowcase'
import FeaturedProjects from './components/FeaturedProjects'
import Lab from './components/Lab'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Work Experience */}
        <WorkExperience />

        {/* 4. Looking to Join */}
        <LookingToJoin />

        {/* 5. Brand Showcase */}
        <BrandShowcase />

        {/* 6. Featured Projects */}
        <FeaturedProjects />

        {/* 7. Lab */}
        <Lab />

        {/* 8. Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
