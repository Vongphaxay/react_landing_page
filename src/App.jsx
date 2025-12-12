// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//components
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Info1 from './components/Info1'
import Info2 from './components/Info2'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Banner />
    <About />
    <Info1/>
    <Info2/>
    <CTA/>
    <Testimonials/>
    <GetInTouch/>
    <Footer/>
    </>
  )
}

export default App
