import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'
import Dev from './pages/Dev'
import Dva from './pages/Dva'
import Aiml from './pages/Aiml'

const App = () => {

  const { pathname, hash } = useLocation()

  useEffect(() => {
  // 🔹 Set dynamic title
  const titles = {
    "/dev-portfolio": "Web Development - Portfolio",
    "/dva-portfolio": "Data Analytics - Portfolio",
    "/aiml-portfolio": "AI & ML - Portfolio",
  }

  document.title = titles[pathname] || "Shobhit's Portfolio"

  // 🔹 Your existing scroll logic
  if (pathname !== '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const id = hash ? hash.replace('#', '') : 'home'
  const el = document.getElementById(id)

  if (el) {
    const yOffset = -80
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}, [pathname, hash])

  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />

        {/* Separate Pages */}
        <Route path="/dev-portfolio" element={<Dev />} />
        <Route path="/dva-portfolio" element={<Dva />} />
        <Route path="/aiml-portfolio" element={<Aiml />} />
      </Routes>


      <Footer />
      <ScrollUp />
    </>
  )
}

export default App