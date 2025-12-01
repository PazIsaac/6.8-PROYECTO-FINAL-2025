const axios = require('axios');

const testLogin = async () => {
    try {
        console.log('🧪 Probando login...');
        
        const response = await axios.post('http://localhost:3001/api/auth/login', {
            email: 'test@test.com',
            contraseña: '123456'
        });
        
        console.log('✅ Login exitoso:', response.data);
    } catch (error) {
        console.error('❌ Error en login:', error.response?.data || error.message);
    }
};

// Esperar 2 segundos y probar
setTimeout(testLogin, 2000);