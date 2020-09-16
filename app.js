const express = require('express'); // import express module
const routes = require('./src/routes/index'); //import routes for our app
const bodyparser = require('body-parser');

const app = express(); 
app.use(bodyparser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use('/', routes); // Isso informa ao nosso app que sempre que receber uma solicitação com "/", use o arquivo de rotas.

module.exports = app; // export our app variable for used in other app
