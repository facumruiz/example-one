// src/App.tsx
import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Especialidades from './components/Especilidades'
import Resenas from './components/Resenas'
import Contacto from './components/Contacto'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Especialidades />
      <Resenas />
      <Contacto />
      <WhatsAppButton />




      <footer id="contacto" className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 Justicia Lex</p>
      </footer>
    </>
  )
}

export default App
