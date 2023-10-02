# backend-ecommerce

## pasos para instalación de dependencias

* 1. npm init -y, 
* 2. en package.json agregar  "type":"module",
* 3. npm install express sequelize mysql2
* 4. npm install -D nodemon
* 5. npm install --save-d jest
* 6. npm install --save-d supertest
* 7. en package.json cambiar en "scripts" el contenido por "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll --no-cache --detectOpenHandles"
* 8. package.json en "scripts" agregar  "dev": "nodemon app.js"
* 9. npm install cors