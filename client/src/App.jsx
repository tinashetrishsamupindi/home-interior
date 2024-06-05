import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import About from './componets/About'
import Designs from './componets/Designs'
import Contact from './componets/Contact'


function App() {

  return (
    <>
      <Navbar />
      <Designs />
      <About />
      <Contact />
    </>
  )
}

export default App
