import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Footer/>
    </>
  )
}

export default App