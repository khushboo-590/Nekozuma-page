import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Story from './components/Story'
import Team from './components/Team'
import Footer from './components/Footer'
import Silder from './components/Silder'
import BackToTop from './components/BackToTop'

function App() {

  return (
    <>
      <Hero />
      <Silder/>
      <Story/>
      <Team />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
