import Navbar from './components/Navbar'
import HeroAbout from './components/HeroAbout'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import BeyondData from './components/BeyondData'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />
      <main>
        <HeroAbout />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <BeyondData />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
