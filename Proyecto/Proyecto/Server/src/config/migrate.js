const { sequelize } = require('./database');
const { User, Product } = require('../models');
require('dotenv').config();

const migrate = async () => {
    try {
        console.log('🔄 Starting database migration...');

        // Verificar conexión
        await sequelize.authenticate();
        console.log('✅ Database connection established.');

        // Sincronizar modelos (crear/actualizar tablas)
        await sequelize.sync({ force: false, alter: true });
        console.log('✅ Database synchronized.');

        // Crear usuario admin por defecto si no existe
        const adminExists = await User.findOne({ where: { rol: 'admin' } });
        
        if (!adminExists) {
            const adminUser = await User.create({
                nombre: 'Administrador',
                email: process.env.ADMIN_EMAIL || 'admin@vetcare.com',
                contraseña: process.env.ADMIN_PASSWORD || 'Admin123!',
                rol: 'admin',
                verificado: true
            });
            console.log('✅ Admin user created:', adminUser.email);
        } else {
            console.log('ℹ️ Admin user already exists.');
        }

        // Crear productos de ejemplo si no existen
        const productCount = await Product.count();
        
        if (productCount === 0) {
            const sampleProducts = [
                {
                    nombre: 'Vacuna Antirrábica',
                    categoria: 'medicamentos',
                    precio: 25.00,
                    stock: 50,
                    descripcion: 'Vacuna antirrábica para perros y gatos',
                    stockMinimo: 10
                },
                {
                    nombre: 'Alimento Premium Perro Adulto',
                    categoria: 'alimentos',
                    precio: 45.99,
                    stock: 30,
                    descripcion: 'Alimento balanceado premium para perros adultos',
                    stockMinimo: 5
                },
                {
                    nombre: 'Collar Antipulgas',
                    categoria: 'accesorios',
                    precio: 15.50,
                    stock: 25,
                    descripcion: 'Collar antipulgas de larga duración',
                    stockMinimo: 8
                },
                {
                    nombre: 'Juguete Pelota Dental',
                    categoria: 'juguetes',
                    precio: 8.99,
                    stock: 40,
                    descripcion: 'Pelota dental para limpieza de dientes',
                    stockMinimo: 15
                },
                {
                    nombre: 'Shampoo Medicado',
                    categoria: 'higiene',
                    precio: 18.75,
                    stock: 20,
                    descripcion: 'Shampoo medicado para problemas de piel',
                    stockMinimo: 6
                }
            ];

            await Product.bulkCreate(sampleProducts);
            console.log('✅ Sample products created.');
        } else {
            console.log('ℹ️ Products already exist in database.');
        }

        console.log('🎉 Migration completed successfully!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
};

// Ejecutar migración si se llama directamente
if (require.main === module) {
    migrate();
}

module.exports = migrate;