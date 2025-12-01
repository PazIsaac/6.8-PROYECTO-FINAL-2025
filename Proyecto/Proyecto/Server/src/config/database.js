const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Crear directorio database si no existe
const dbDir = path.resolve(__dirname, '../database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Ubicación de la base de datos SQLite
const dbPath = path.resolve(dbDir, 'veterinaria.db');

// Crear conexión SQLite
const db = new sqlite3.Database(dbPath, (error) => {
    if (error) {
        console.error('❌ Database connection failed:', error.message);
    } else {
        console.log('✅ Database connection established successfully.');
        console.log('Conexión exitosa a la base de datos SQLite ✅');
        
        // Crear tablas si no existen
        db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            contraseña TEXT NOT NULL,
            rol TEXT DEFAULT 'cliente',
            verificado INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Error creating usuarios table:', err);
            } else {
                console.log('Tabla Usuarios creada o ya existente ✅');
            }
        });
        
        db.run(`CREATE TABLE IF NOT EXISTS turnos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER NOT NULL,
            fecha DATE NOT NULL,
            hora TIME NOT NULL,
            motivo TEXT NOT NULL,
            estado TEXT DEFAULT 'pendiente',
            notas TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        )`, (err) => {
            if (err) {
                console.error('Error creating turnos table:', err);
            }
        });
    }
});

// Función para probar la conexión
const testConnection = async () => {
    return new Promise((resolve) => {
        db.get('SELECT 1', (error) => {
            if (error) {
                console.error('❌ Database test failed:', error);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};

module.exports = { db, testConnection };