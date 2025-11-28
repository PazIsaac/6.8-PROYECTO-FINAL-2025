import React, { useState } from 'react'
import './Component/css/index.css'
import Header from './Component/Global/Header'
import Home from './Component/Pages/Home'
import Services from './Component/Pages/Services'
import About from './Component/Pages/About'
import Contact from './Component/Pages/Contact'
import RegistroUsuario from './Component/Pages/RegistroUsuario'
import Footer from './Component/Global/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showRegistro, setShowRegistro] = useState(false)

  // Si está en modo registro, mostrar solo el formulario
  if (showRegistro) {
    return (
      <div className="App">
        <div className="registro-header-simple">
          <div className="container">
            <h1>🐾 VetCare</h1>
            <button 
              className="btn-back"
              onClick={() => setShowRegistro(false)}
            >
              ← Volver al sitio
            </button>
          </div>
        </div>
        <main>
          <RegistroUsuario setShowRegistro={setShowRegistro} />
        </main>
      </div>
    )
  }

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} setShowRegistro={setShowRegistro} />
      case 'services':
        return <Services />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home setActiveSection={setActiveSection} setShowRegistro={setShowRegistro} />
    }
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} setShowRegistro={setShowRegistro} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  )
}

export default App