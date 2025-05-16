
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import GlowingCursor from './components/GlowingCursor'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'

function App() {
  

  return (
    <div className="bg-slate-900  scroll-smooth flex h-screen overflow-hidden ">
      {/* Background */}
      <GlowingCursor />

      {/* Left Navbar */}
      <Navbar />

      {/* Right Content */}
    <div className="flex-1 overflow-y-scroll p-8">
      {/* About */}
      <About />
  
      {/* Projects */}
          
      <Projects />
          

      {/* Contact */}
      <Contact />
      </div>
    </div>
        
  )
}

export default App
