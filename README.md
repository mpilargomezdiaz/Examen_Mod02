# Examen_Mod02
Bases de datos relacionales (MySQL) y no relacionales (MongoDB)

# Bases de Datos Relacionales y No Relacionales con Sequelize y Mongoose

Este ejercicio tiene como objetivo comparar e implementar dos tipos de bases de datos: una **relacional**, utilizando Sequelize y una **no relacional**, utilizando Mongoose. A través de un servidor Node.js, se pueden insertar datos en ambas estructuras mediante peticiones HTTP.

## Enunciado del ejercicio

1. **Modelado de bases de datos:**

   - **Base de datos relacional:**
     - Entidad `Cliente`: contiene `dni`, `nombre`, `apellidos` y `número de tarjeta`.
     - Entidad `Producto`: contiene `código de barras`, `nombre` y `precio`.
     - Relación: los clientes compran productos, simulando un sistema para un supermercado.

   - **Base de datos no relacional:**
     - Colección `Usuarios`: contiene `email` y `contraseña`.

2. **Modelado:**
   - Creación de los modelos de datos usando **Sequelize** para la base relacional.
   - Creación de los esquemas usando **Mongoose** para la base no relacional.

3. **Servidor e inserciones:**
   - Implementación de un servidor con **Express.js** que permita realizar inserciones a través de peticiones HTTP (POST) en las tres estructuras de datos:
     - Insertar clientes y productos en la base de datos relacional.
     - Insertar usuarios en la base de datos no relacional.

## Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize (con MySQL)
- Mongoose (con MongoDB)

## Cómo ejecutar el proyecto

1.- Clona el repositorio.

2.- Instala las dependencias con npm install.

3.- Ejecuta npm start.

