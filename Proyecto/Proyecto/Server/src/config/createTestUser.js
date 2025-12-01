const bcrypt = require('bcryptjs');
const { db } = require('./database');

const createTestUser = async () => {
    try {
        // Verificar si ya existe un usuario de prueba
        const existingUser = await new Promise((resolve, reject) => {
            db.get('SELECT id FROM usuarios WHERE email = ?', ['test@test.com'], (error, row) => {
                if (error) reject(error);
                else resolve(row);
            });
        });

        if (existingUser) {
            console.log('✅ Usuario de prueba ya existe: test@test.com');
            return;
        }

        // Crear usuario de prueba
        const hashedPassword = await bcrypt.hash('123456', 12);
        
        await new Promise((resolve, reject) => {
            db.run(
                'INSERT INTO usuarios (nombre, email, contraseña, rol, verificado) VALUES (?, ?, ?, ?, ?)',
                ['Usuario Test', 'test@test.com', hashedPassword, 'cliente', 1],
                function(error) {
                    if (error) reject(error);
                    else resolve({ insertId: this.lastID });
                }
            );
        });

        console.log('✅ Usuario de prueba creado:');
        console.log('   Email: test@test.com');
        console.log('   Contraseña: 123456');

    } catch (error) {
        console.error('❌ Error creando usuario de prueba:', error);
    }
};

// Ejecutar si se llama directamente
if (require.main === module) {
    createTestUser().then(() => {
        process.exit(0);
    });
}

module.exports = createTestUser;