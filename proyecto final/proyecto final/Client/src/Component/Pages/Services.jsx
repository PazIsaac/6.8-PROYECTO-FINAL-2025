import React from 'react'
import '../css/Services.css'

function Services() {
  const services = [
    {
      id: 1,
      title: "Consultas Generales",
      description: "Revisiones médicas completas para mantener la salud de tu mascota",
      icon: "🩺",
      price: "Desde $25"
    },
    {
      id: 2,
      title: "Vacunación",
      description: "Plan completo de vacunas para prevenir enfermedades",
      icon: "💉",
      price: "Desde $15"
    },
    {
      id: 3,
      title: "Cirugías",
      description: "Procedimientos quirúrgicos con tecnología de vanguardia",
      icon: "⚕️",
      price: "Consultar"
    },
    {
      id: 4,
      title: "Laboratorio",
      description: "Análisis clínicos y estudios diagnósticos",
      icon: "🔬",
      price: "Desde $30"
    },
    {
      id: 5,
      title: "Emergencias",
      description: "Atención de urgencias las 24 horas del día",
      icon: "🚨",
      price: "Según caso"
    },
    {
      id: 6,
      title: "Peluquería",
      description: "Servicios de estética y cuidado personal",
      icon: "✂️",
      price: "Desde $20"
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h1>Nuestros Servicios</h1>
          <p>Ofrecemos atención integral para el bienestar de tu mascota</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
              <button className="service-btn">Más información</button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>¿Necesitas agendar una cita?</h2>
          <p>Contáctanos y te ayudaremos a elegir el mejor servicio para tu mascota</p>
          <button className="btn-primary">Contactar Ahora</button>
        </div>
      </div>
    </section>
  )
}

export default Services