const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { db } = require('../config/database');

class AuthController {
    // Generar JWT token
    generateToken(userId) {
        const secret = process.env.JWT_SECRET || 'fallback_secret_key';
        return jwt.sign(
            { id: userId },
            secret,
            { expiresIn: '7d' }
        );
    }

    // Login de usuario
    async login(req, res) {
        try {
            const { email, contraseña } = req.body;

            if (!email || !contraseña) {
                return res.status(400).json({
                    error: 'Email y contraseña son requeridos'
                });
            }

            // Buscar usuario
            const user = await new Promise((resolve, reject) => {
                db.get(
                    'SELECT id, nombre, email, contraseña, rol, verificado FROM usuarios WHERE email = ?',
                    [email],
                    (error, row) => {
                        if (error) {
                            console.error('Database error:', error);
                            reject(error);
                        } else {
                            resolve(row);
                        }
                    }
                );
            });

            if (!user) {
                return res.status(401).json({
                    error: 'Credenciales inválidas'
                });
            }

            // Verificar contraseña
            const isValidPassword = await bcrypt.compare(contraseña, user.contraseña);
            if (!isValidPassword) {
                return res.status(401).json({
                    error: 'Credenciales inválidas'
                });
            }

            // Generar token
            const token = this.generateToken(user.id);

            res.json({
                message: 'Login exitoso',
                token,
                user: {
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email,
                    rol: user.rol,
                    verificado: user.verificado
                }
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({
                error: 'Error interno del servidor'
            });
        }
    }

    // Registro de usuario
    async register(req, res) {
        try {
            const { nombre, email, contraseña } = req.body;

            if (!nombre || !email || !contraseña) {
                return res.status(400).json({
                    error: 'Todos los campos son requeridos'
                });
            }

            // Verificar si el usuario ya existe
            const existingUser = await new Promise((resolve, reject) => {
                db.get('SELECT id FROM usuarios WHERE email = ?', [email], (error, row) => {
                    if (error) reject(error);
                    else resolve(row);
                });
            });

            if (existingUser) {
                return res.status(400).json({
                    error: 'El email ya está registrado'
                });
            }

            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(contraseña, 12);

            // Crear usuario
            const result = await new Promise((resolve, reject) => {
                db.run(
                    'INSERT INTO usuarios (nombre, email, contraseña, rol, verificado) VALUES (?, ?, ?, ?, ?)',
                    [nombre, email, hashedPassword, 'cliente', 1],
                    function(error) {
                        if (error) reject(error);
                        else resolve({ insertId: this.lastID });
                    }
                );
            });

            res.status(201).json({
                message: 'Usuario registrado exitosamente',
                user: {
                    id: result.insertId,
                    nombre,
                    email,
                    rol: 'cliente',
                    verificado: true
                }
            });

        } catch (error) {
            console.error('Register error:', error);
            res.status(500).json({
                error: 'Error interno del servidor'
            });
        }
    }

    // Obtener perfil del usuario autenticado
    async getProfile(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({
                    error: 'Usuario no autenticado'
                });
            }

            res.json({
                user: req.user
            });
        } catch (error) {
            console.error('Get profile error:', error);
            res.status(500).json({
                error: 'Error interno del servidor'
            });
        }
    }
}

module.exports = new AuthController();