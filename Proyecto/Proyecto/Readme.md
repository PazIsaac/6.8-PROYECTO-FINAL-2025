# VALIDAR USUARIOS (User Validation Service)

Este proyecto es un servicio backend (API) construido con Node.js y Express para la **validación y gestión básica de usuarios**.

##  Características Principales

* **Autenticación y Autorización:** Implementación de tokens para la gestión de sesiones.
* **Envío de Correos Electrónicos:** Funcionalidad para enviar emails.
* **Estructura Modular:** Organización clara del código usando Controladores, Rutas y Utilidades (`Utils`).
* **Configuración Ambiental:** Uso del archivo `.env` para gestionar variables de entorno sensibles (conexiones a DB, claves secretas, etc.).

## 🛠️ Tecnologías Utilizadas

* **Node.js**
* **Express** 
* **SQLite3** 
* **cors** 
* **jsonwebtoken** 
* **nodemailer** 


## Endpoints de la API

 - POST --> /api/registrousuario --> Crea un nuevo usuario.
 - GET --> /api/verificacion/:Token --> Validación de Usuario.

## Estructura de carpetas

Aquí tienes la distribución principal del proyecto con una breve descripción de cada carpeta y archivo relevante:

```
Proyecto/
├─ Readme.md                      # Documentación principal (este archivo)
├─ Client/                         # Frontend (Vite + React)
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.js
│  └─ src/
│     ├─ App.jsx
│     ├─ main.jsx
│     ├─ assets/
│     └─ Component/
│        ├─ Layouts.jsx
│        ├─ BackEnd/api.js
│        ├─ css/                  # Estilos por componente
│        └─ Pages/                # Páginas React (Home, Login, etc.)
├─ Server/                         # Backend (Node.js + Express)
│  ├─ app.js
│  ├─ server.js
│  ├─ package.json
│  └─ src/
│     ├─ config/
│     │  ├─ database.js
│     │  ├─ migrate.js
│     │  └─ createTables.sql      # SQL para crear tablas iniciales
│     ├─ Controller/              # Controladores (lógica de rutas)
│     ├─ Routes/                   # Definición de rutas de la API
│     ├─ models/                   # Modelos Sequelize (User, Product, ...)
│     ├─ middlewares/              # Middlewares (auth, roles, validaciones)
│     ├─ services/                 # Servicios (email, otros)
│     ├─ Utils/                    # Utilidades (Token, EnviarEmails)
│     └─ DataBase/                 # Adaptadores DB (db.js, conexiones)
└─ Proyecto/ (otros archivos y docs)
```

Notas rápidas:

- **Frontend (`Client/`)**: aplicación React con Vite; contiene componentes, páginas y estilos.
- **Backend (`Server/`)**: servidor Express; la lógica de negocio está en `src/Controller`, las rutas en `src/Routes` y los modelos en `src/models`.
- **Base de datos**: hay SQL de creación en `src/config/createTables.sql` (MySQL) y en algunos puntos se usa SQLite (revisar `DataBase/db.js` y `config/database.js`).
- **ERD/diagramas**: generé `Server/ERD/erd.dot` y `Server/ERD/erd.puml` con el diagrama ER (usuarios, productos, turnos).

Si quieres, puedo:
- Generar una imagen PNG del `erd.puml` ahora.
- Añadir un modelo Sequelize `Turno` en `Server/src/models/` y declarar las asociaciones con `User`.
