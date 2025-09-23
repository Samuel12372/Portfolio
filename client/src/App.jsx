import Navbar from './components/Navbar'
import Projects from './components/Projects'
import GlowingCursor from './components/GlowingCursor'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'

function App() {
  return (
    
    <div className="bg-slate-900  scroll-smooth flex flex-col xl:flex-row h-full min-h-screen">
      {/* Glowing Background Cursor */}
      <GlowingCursor />

      {/* Left Navbar*/}
      
        <Navbar />
      

      {/* Right/Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  
  )
}

export default App
