import React, { useState } from 'react'
import Swal from 'sweetalert2'
import api from '../BackEnd/api.js'
import '../css/RegistroUsuario.css'

function RegistroUsuario({ setShowRegistro }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        contraseña: '',
        confirmarContraseña: '',
        tipoMascota: '',
        nombreMascota: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Limpiar error cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El email no es válido'
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El teléfono es requerido'
        }

        if (!formData.contraseña) {
            newErrors.contraseña = 'La contraseña es requerida'
        } else if (formData.contraseña.length < 6) {
            newErrors.contraseña = 'La contraseña debe tener al menos 6 caracteres'
        }

        if (!formData.confirmarContraseña) {
            newErrors.confirmarContraseña = 'Confirma tu contraseña'
        } else if (formData.contraseña !== formData.confirmarContraseña) {
            newErrors.confirmarContraseña = 'Las contraseñas no coinciden'
        }

        if (!formData.tipoMascota) {
            newErrors.tipoMascota = 'Selecciona el tipo de mascota'
        }

        if (!formData.nombreMascota.trim()) {
            newErrors.nombreMascota = 'El nombre de la mascota es requerido'
        }

        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validateForm()

        if (Object.keys(newErrors).length === 0) {
            try {
                // Simulación del backend - descomenta la línea de abajo para usar el API real
                // const servidor = await api.post('/registrousuario', formData)
                
                // Simulación exitosa
                await new Promise(resolve => setTimeout(resolve, 1000)) // Simular delay
                
                Swal.fire({
                    title: '¡Registro Exitoso!',
                    text: 'Te hemos enviado un email de verificación. Revisa tu bandeja de entrada.',
                    icon: 'success',
                    confirmButtonColor: '#4a90e2'
                }).then(() => {
                    // Volver al sitio principal después del registro exitoso
                    setShowRegistro(false)
                })
                
                // Limpiar formulario
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    contraseña: '',
                    confirmarContraseña: '',
                    tipoMascota: '',
                    nombreMascota: ''
                })
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al registrar tu cuenta. Inténtalo de nuevo.',
                    icon: 'error',
                    confirmButtonColor: '#e74c3c'
                })
            }
        } else {
            setErrors(newErrors)
            Swal.fire({
                title: 'Error',
                text: 'Por favor corrige los errores en el formulario',
                icon: 'error',
                confirmButtonColor: '#e74c3c'
            })
        }
    }

    return (
        <section className="registro">
            <div className="container">
                <div className="registro-header">
                    <h1>Registro de Usuario</h1>
                    <p>Únete a VetCare y mantén a tu mascota siempre saludable</p>
                </div>

                <div className="registro-content">
                    <div className="registro-info">
                        <h2>🐾 Beneficios de Registrarte</h2>
                        <ul>
                            <li>📅 Agenda citas online</li>
                            <li>📋 Historial médico digital</li>
                            <li>🔔 Recordatorios de vacunas</li>
                            <li>💊 Seguimiento de tratamientos</li>
                            <li>📞 Acceso prioritario a emergencias</li>
                            <li>🎁 Descuentos especiales</li>
                        </ul>
                    </div>

                    <div className="registro-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className={errors.nombre ? 'error' : ''}
                                    />
                                    {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono *</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className={errors.telefono ? 'error' : ''}
                                />
                                {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contraseña">Contraseña *</label>
                                    <input
                                        type="password"
                                        id="contraseña"
                                        name="contraseña"
                                        value={formData.contraseña}
                                        onChange={handleChange}
                                        className={errors.contraseña ? 'error' : ''}
                                    />
                                    {errors.contraseña && <span className="error-message">{errors.contraseña}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirmarContraseña">Confirmar Contraseña *</label>
                                    <input
                                        type="password"
                                        id="confirmarContraseña"
                                        name="confirmarContraseña"
                                        value={formData.confirmarContraseña}
                                        onChange={handleChange}
                                        className={errors.confirmarContraseña ? 'error' : ''}
                                    />
                                    {errors.confirmarContraseña && <span className="error-message">{errors.confirmarContraseña}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="tipoMascota">Tipo de Mascota *</label>
                                    <select
                                        id="tipoMascota"
                                        name="tipoMascota"
                                        value={formData.tipoMascota}
                                        onChange={handleChange}
                                        className={errors.tipoMascota ? 'error' : ''}
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="perro">🐕 Perro</option>
                                        <option value="gato">🐱 Gato</option>
                                        <option value="conejo">🐰 Conejo</option>
                                        <option value="ave">🐦 Ave</option>
                                        <option value="otro">🐾 Otro</option>
                                    </select>
                                    {errors.tipoMascota && <span className="error-message">{errors.tipoMascota}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="nombreMascota">Nombre de la Mascota *</label>
                                    <input
                                        type="text"
                                        id="nombreMascota"
                                        name="nombreMascota"
                                        value={formData.nombreMascota}
                                        onChange={handleChange}
                                        className={errors.nombreMascota ? 'error' : ''}
                                    />
                                    {errors.nombreMascota && <span className="error-message">{errors.nombreMascota}</span>}
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegistroUsuario