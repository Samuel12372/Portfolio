
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './App.css'

function App() {
  

  return (
    <div className="bg-gray-900  scroll-smooth flex h-screen overflow-hidden">
            {/* Left Navbar */}
            <Navbar />

            {/* Right Content */}
            <div className="flex-1 overflow-y-scroll p-8">

                {/* About us */}
                <section id="about" className="min-h-screen scroll-mt-16 px-6 md:px-16 py-16 text-white">
                  <div className="max-w-3xl mx-auto">
                    {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-6  inline-block">
                      About Me
                    </h2> */}
                    <p className="text-lg leading-relaxed mb-4">
                      Hello! I'm <span className="font-semibold text-green-500">Samuel Knowles</span>, a frontend developer with a passion for crafting beautiful and intuitive user experiences. I enjoy turning complex problems into simple, elegant solutions.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      My journey into web development started with curiosity and grew into a full-blown obsession. These days, I specialize in building fast, accessible, and responsive web applications using technologies like 
                      <span className="text-green-500 font-medium"> React</span>, 
                      <span className="text-green-500 font-medium"> Tailwind CSS</span>, and 
                      <span className="text-green-500 font-medium"> Vite</span>.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      I'm always eager to learn new tools, collaborate with creative teams, and build things that make a difference. Whether it's a sleek portfolio site or a dynamic web app, I love bringing ideas to life in the browser.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Outside of coding, you’ll probably find me <span className="italic text-gray-600">[insert a fun or personal detail here — e.g., exploring coffee shops, sketching, gaming, or reading sci-fi]</span>.
                    </p>
                  </div>
                </section>

                    {/* Projects */}
                
                    <Projects />
                

                {/* Contact */}
                <section id="contact" className="min-h-screen scroll-mt-16">
                    <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                    <p>Here's where your contact info goes.</p>
                </section>
            </div>
        </div>
  )
}

export default App
