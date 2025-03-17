import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './Layouts/Backgrounds'
import Header from './Layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black text-white">
        <Background />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>    </>
  )
}

export default App
