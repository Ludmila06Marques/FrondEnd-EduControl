# EduControl – Sistema de Gestión Educativa

<img src="./img/logo-educontrol.png" alt="Logo EduControl" width="200">

Bienvenido al repositorio de **EduControl**, una aplicación moderna, robusta y escalable diseñada para facilitar la **gestión integral de centros educativos**. Esta plataforma permite administrar eficientemente alumnos, profesores, tutores y personal administrativo, ofreciendo herramientas clave para la organización académica y la comunicación entre los distintos roles.

---

## 📌 Descripción

**EduControl** es una solución tecnológica para instituciones educativas que buscan mejorar sus procesos administrativos y académicos. La aplicación está organizada en capas para garantizar un código limpio, mantenible y fácilmente escalable.

---

## 🚀 Funcionalidades principales

- **Registro e inicio de sesión** con validación de credenciales.
- **Gestión de roles**: alumno, profesor, tutor y administrador.
- **Gestión de asignaturas, cursos, clases y semestres**.
- **CRUD completo** de todos los elementos del sistema.
- **Registro de exámenes y calificaciones** por parte del profesorado.
- **Visualización de horarios** personalizada para cada alumno.
- **Sistema de notificaciones internas** para advertencias, recordatorios y avisos.
- **Chat privado** entre profesores y tutores para el seguimiento académico.
- **Asistencia registrada por NFC** *(funcionalidad futura planificada)*.
- **Carga de archivos multimedia** (exámenes, material de apoyo, etc.).

---

## ⚙️ Tecnologías utilizadas

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Base de datos**: PostgreSQL
- **Validaciones**: Joi
- **Autenticación y autorización**: JWT + Middlewares

---

## 🧩 Arquitectura del Backend

La estructura del backend sigue una arquitectura en capas:

- `routes/`: Definición de rutas de la API.
- `controllers/`: Manejo de solicitudes HTTP.
- `services/`: Lógica de negocio central.
- `repositories/`: Acceso y gestión de la base de datos.
- `middlewares/`: Validaciones, control de acceso y manejo de errores.
- `schemas/`: Validación de datos con Joi.

---

## 🖼️ Interfaz

La interfaz está diseñada para ofrecer una experiencia clara y agradable, con navegación intuitiva y adaptada a cada tipo de usuario.

---

## 📈 Futuras mejoras

- Integración de control de asistencia mediante **tecnología NFC**.
- Generación de **informes académicos en PDF**.

---

## 📸 Capturas

![Panel Principal](./img/app.png)

---

## 📬 Contacto

Para más información o colaboración en el desarrollo, puedes escribir a:  
📧 **educontrolapp@gmail.com**

---
