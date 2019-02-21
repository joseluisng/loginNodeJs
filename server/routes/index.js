const express = require('express');
const app = express();

// Rutas para agregar usuarios
app.use(require('./usuario'));

//Ruta para hacer login
app.use(require('./login'));


module.exports = app;