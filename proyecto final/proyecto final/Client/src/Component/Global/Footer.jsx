import React from 'react'
import '../css/Footer.css'
import logo from '../../assets/perrito.pethealth.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img className='logo_footer' src={logo} alt="" />
            <p>Cuidando a tu mejor amigo con amor y profesionalismo desde 2008.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Consultas Generales</a></li>
              <li><a href="#">Vacunación</a></li>
              <li><a href="#">Cirugías</a></li>
              <li><a href="#">Laboratorio</a></li>
              <li><a href="#">Emergencias 24/7</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-item">
              <span>📍</span>
              <p>Av. Principal 123, Centro<br />Ciudad, Estado 12345</p>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <p>info@vetcare.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Horarios</h4>
            <div className="schedule">
              <p><strong>Lunes - Viernes:</strong><br />8:00 AM - 8:00 PM</p>
              <p><strong>Sábados:</strong><br />9:00 AM - 6:00 PM</p>
              <p><strong>Domingos:</strong><br />10:00 AM - 4:00 PM</p>
            </div>
            <div className="emergency-footer">
              <p><strong>🚨 Emergencias 24/7:</strong><br />(555) 911-PETS</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 VetCare. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
              <a href="#">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

