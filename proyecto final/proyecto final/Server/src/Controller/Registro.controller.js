const db = require('../DataBase/db')
const { GenerarToken } = require('../Utils/Token')
const { EnviarCorreo } = require('../Utils/EnviarEmails')
const Encriptar = require('bcryptjs')


const RegistrarNuevoUsuario = async (req, res) => {
    const { Nombre, Email, Contraseña } = req.body
    console.log(req.body)
    if (!Nombre || !Email || !Contraseña) {
        console.error('Revisar Datos Vacios ⛔')
        return res.status(401).json({ Error: 'Datos Vacios' })
    }
    try {
        const hash = Encriptar.hashSync(Contraseña, 10)
        const Token = GenerarToken(Email)
        query = `INSERT INTO Usuarios(Nombre,Email,Contraseña,Verificacion,TokenEmail)VALUES(?,?,?,?,?)`
        db.run(query, [Nombre, Email, hash,0,Token], async (Error) => {
            if (Error) {
                console.error('Revisar query ⛔', Error.message)
                return res.status(400).json({ Error: 'El Usuario ya Existe!' })
            }
            await EnviarCorreo(Nombre, Email, Token)
            res.json({
                message: 'Usuario Registrado Exitosamente , revise su email para terminar el proceso de validacion ⚠'
            })
        })

    }
    catch (Error) {

    }
}

module.exports={RegistrarNuevoUsuario}