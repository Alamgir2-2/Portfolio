import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './Layouts/Backgrounds'
import Header from './Layouts/Header'
import Certificates from './components/Certificates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black text-white">
        <Background />
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Certificates />
        <Contact />
        <Footer />
      </div>    </>
  )
}

export default App
