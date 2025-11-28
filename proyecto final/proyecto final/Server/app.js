const Express= require('express');
const App= Express();

const cors= require('cors');
App.use(cors());
App.use(Express.json());


require('dotenv').config();
const PORT= process.env.PORT || 5000;

const Routes= require('./src/Routes/RegistroUsuario.Routes')
App.use('/api',Routes)

App.listen(PORT,()=>{
    console.log(`🚀 http://localhost:${PORT}`);
})