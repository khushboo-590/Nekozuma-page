import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Story from './components/Story'
import Team from './components/Team'
import Footer from './components/Footer'
import BackToTop from './components/common/BackToTop'
import CustomSlider from './components/CustomSilder'

function App() {

  return (
    <>
      <Hero />
      <CustomSlider/>
      <Story/>
      <Team />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App
