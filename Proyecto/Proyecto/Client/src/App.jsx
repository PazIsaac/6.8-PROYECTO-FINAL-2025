import React, { useState } from 'react'
import './Component/css/index.css'
import Header from './Component/Global/Header'
import Home from './Component/Pages/Home'
import Services from './Component/Pages/Services'
import About from './Component/Pages/About'
import Contact from './Component/Pages/Contact'
import RegistroUsuario from './Component/Pages/RegistroUsuario'
import Login from './Component/Pages/Login'
import Footer from './Component/Global/Footer'
import logo from './assets/perrito.pethealth.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showRegistro, setShowRegistro] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState(null)

  // Verificar si hay usuario logueado al cargar
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  // Si está en modo login, mostrar solo el formulario
  if (showLogin) {
    return (
      <div className="App">
        <div className="registro-header-simple">
          <div className="container">
            <img className='Logo' src={logo} alt="Logo" />
            <button 
              className="btn-back"
              onClick={() => setShowLogin(false)}
            >
              ← Volver al sitio
            </button>
          </div>
        </div>
        <main>
          <Login setShowLogin={setShowLogin} setShowRegistro={setShowRegistro} />
        </main>
      </div>
    )
  }

  // Si está en modo registro, mostrar solo el formulario
  if (showRegistro) {
    return (
      <div className="App">
        <div className="registro-header-simple">
          <div className="container">
            <img className='Logo' src={logo} alt="Logo" />
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
        return <Services setActiveSection={setActiveSection} />
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
      <Header activeSection={activeSection} setActiveSection={setActiveSection} setShowRegistro={setShowRegistro} setShowLogin={setShowLogin} user={user} handleLogout={handleLogout} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  )
}

export default App