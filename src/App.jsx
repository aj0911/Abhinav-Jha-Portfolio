import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        <ToastContainer/>
    </>
  )
}

export default App