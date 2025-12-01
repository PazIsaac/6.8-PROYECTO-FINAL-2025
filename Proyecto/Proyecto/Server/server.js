const app = require('./app');
const { testConnection } = require('./src/config/database');
const createTestUser = require('./src/config/createTestUser');

const PORT = process.env.PORT || 3001;

// Iniciar servidor
const startServer = async () => {
    try {
        // Verificar conexión a la base de datos
        const isConnected = await testConnection();
        
        if (!isConnected) {
            console.error('❌ Cannot start server without database connection');
            process.exit(1);
        }

        // Crear usuario de prueba
        await createTestUser();

        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`📚 API Health: http://localhost:${PORT}/api/health`);
            console.log('🔐 Test user: test@test.com / 123456');
        });
    } catch (error) {
        console.error('❌ Unable to start server:', error);
        process.exit(1);
    }
};

startServer();