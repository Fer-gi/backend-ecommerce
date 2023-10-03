
# Guía de Instalación del Entorno

Este es un breve tutorial para configurar un entorno de desarrollo para una aplicación Node.js con Express, Sequelize, MySQL, y Jest. Sigue los siguientes pasos para configurar tu entorno de desarrollo.

## 1. Inicializar el Proyecto

Primero, crea un nuevo proyecto de Node.js y completa el archivo `package.json` ejecutando los siguientes comandos:

```bash
npm init -y
```
Asegúrate de agregar la configuración "type": "module" en tu archivo package.json para habilitar el soporte de módulos ES6.
```
{
  "type": "module",
  // ...
}
```
2. Instalar Dependencias
Ejecuta los siguientes comandos en tu terminal para instalar las dependencias necesarias para tu proyecto:
npm install express sequelize mysql2
npm install -D nodemon
npm install --save-dev jest
npm install --save-dev supertest
npm install cors

* express, sequelize, mysql2: Estas son las dependencias principales para crear una aplicación web con una base de datos MySQL.
* nodemon: Esta dependencia es útil durante el desarrollo, ya que reiniciará automáticamente el servidor cuando realices cambios en el código.
* jest y supertest: Estas dependencias se utilizan para realizar pruebas unitarias en tu aplicación.
* cors: Esta dependencia es para habilitar el manejo de CORS (Cross-Origin Resource Sharing) en tu aplicación, lo que es útil si tu aplicación se comunica con diferentes dominios.

3. Configurar Scripts en package.json
Edita tu archivo package.json y ajusta los scripts en la sección "scripts" de la siguiente manera:
```
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll --no-cache --detectOpenHandles",
  "dev": "nodemon app.js"
}
```
* test: Este script ejecutará las pruebas utilizando Jest en modo observador para que las pruebas se ejecuten automáticamente cuando hagas cambios.
* dev: Este script iniciará tu aplicación utilizando Nodemon para reiniciar automáticamente el servidor cuando hagas cambios en tu código.
  
¡Listo! Tu entorno de desarrollo está configurado y listo para comenzar a construir tu aplicación con Node.js, Express, Sequelize y MySQL. Asegúrate de ajustar la configuración y el código según las necesidades de tu proyecto.

