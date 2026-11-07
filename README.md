# Pizzería Mamma Mia – Hito 8

Aplicación web desarrollada con React y JavaScript, como parte del curso Full Stack JavaScript de Desafío Latam.

En este hito trabajé en la implementación del registro e inicio de sesión de usuarios, utilizando JWT para la autenticación. También conecté el carrito de compras con el backend para poder realizar las compras.

## Tecnologías utilizadas

- React
- JavaScript
- React Router DOM
- Context API
- Bootstrap
- Vite
- Fetch API
- Node.js
- Express
- JWT
- CSS

## Estructura del proyecto

```text
Proyecto.final.react/
│
├── public/
│
├── src/
│   ├── componentes/
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── login.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizzas.jsx
│   │   ├── profile.jsx
│   │   └── notfound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Funcionalidades

### Página principal

- Visualización del catálogo de pizzas.
- Navegación entre las distintas secciones de la aplicación.

### Detalle de pizzas

- Visualización de información de cada pizza.
- Obtención de datos desde una API mediante Fetch.
- Uso de parámetros dinámicos con `useParams`.

### Carrito de compras

- Visualización de los productos agregados.
- Cálculo automático del total de la compra.
- Botón de pago deshabilitado cuando no hay una sesión iniciada o el carrito está vacío.
- Envío del carrito al backend para realizar la compra.
- Mensaje de confirmación cuando la compra se realiza correctamente.

### Registro e inicio de sesión

- Registro de nuevos usuarios.
- Inicio de sesión con correo y contraseña.
- Validación de los datos ingresados.
- Autenticación mediante JWT.
- Almacenamiento del token y correo del usuario en Context API.

### Perfil de usuario

- Visualización del correo del usuario autenticado.
- Obtención de los datos del usuario mediante la ruta `/api/auth/me`.
- Botón para cerrar sesión.

### Gestión de sesión y rutas protegidas

- Manejo del estado del usuario mediante Context API.
- Función `login`, `register` y `logout`.
- Cierre de sesión y limpieza de los datos del usuario.
- Acceso al perfil solo cuando existe una sesión iniciada.
- Restricción de acceso a Login y Register cuando el usuario ya inició sesión.

## Backend

Para este hito se utilizó un backend desarrollado con Node.js y Express, que permite realizar las siguientes operaciones:

- Registro de usuarios.
- Inicio de sesión y generación de token JWT.
- Validación del token mediante middleware.
- Consulta del perfil del usuario autenticado.
- Recepción de las compras realizadas desde el carrito.

## Repositorio
https://gfazzini.github.io/Proyecto.final.react/
