import React from 'react'
import '../css/About.css'

function About() {
  const team = [
    {
      id: 1,
      name: "Dr. María González",
      specialty: "Medicina General",
      experience: "15 años de experiencia",
      image: "👩⚕️"
    },
    {
      id: 2,
      name: "Dr. Carlos Rodríguez",
      specialty: "Cirugía Veterinaria",
      experience: "12 años de experiencia",
      image: "👨⚕️"
    },
    {
      id: 3,
      name: "Dra. Ana Martínez",
      specialty: "Dermatología Animal",
      experience: "8 años de experiencia",
      image: "👩⚕️"
    }
  ]

  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h1>Sobre Nosotros</h1>
          <p>Conoce más sobre PetHealth y nuestro compromiso con la salud animal</p>
        </div>

        <div className="about-content">
          <div className="mission-vision">
            <div className="mission">
              <h2>🎯 Nuestra Misión</h2>
              <p>
                Brindar atención médica veterinaria de excelencia, con un enfoque integral 
                que combine tecnología de vanguardia, conocimiento especializado y un trato 
                humano excepcional para garantizar el bienestar de las mascotas y la 
                tranquilidad de sus familias.
              </p>
            </div>

            <div className="vision">
              <h2>🔮 Nuestra Visión</h2>
              <p>
                Ser la clínica veterinaria de referencia en la región, reconocida por 
                nuestra excelencia profesional, innovación en tratamientos y compromiso 
                inquebrantable con la salud y felicidad de los animales que cuidamos.
              </p>
            </div>
          </div>

          <div className="values">
            <h2>💎 Nuestros Valores</h2>
            <div className="values-grid">
              <div className="value">
                <div className="value-icon">❤️</div>
                <h3>Amor por los Animales</h3>
                <p>Cada mascota es tratada con cariño y respeto</p>
              </div>
              <div className="value">
                <div className="value-icon">🏆</div>
                <h3>Excelencia</h3>
                <p>Buscamos la perfección en cada tratamiento</p>
              </div>
              <div className="value">
                <div className="value-icon">🤝</div>
                <h3>Confianza</h3>
                <p>Construimos relaciones duraderas con nuestros clientes</p>
              </div>
              <div className="value">
                <div className="value-icon">🔬</div>
                <h3>Innovación</h3>
                <p>Utilizamos la tecnología más avanzada</p>
              </div>
            </div>
          </div>

          <div className="team">
            <h2>👥 Nuestro Equipo</h2>
            <div className="team-grid">
              {team.map(member => (
                <div key={member.id} className="team-member">
                  <div className="member-image">{member.image}</div>
                  <h3>{member.name}</h3>
                  <p className="specialty">{member.specialty}</p>
                  <p className="experience">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stats">
            <h2>📊 Nuestros Números</h2>
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Años de Experiencia</div>
              </div>
              <div className="stat">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Mascotas Atendidas</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Atención de Emergencias</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About