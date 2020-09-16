const express = require('express') // import express module    
const expressLayouts = require('express-ejs-layouts')
const routes = require('./src/routes/index') //import routes for our app
const bodyparser = require('body-parser')

const app = express()
//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set template engine
app.use(expressLayouts)
app.set('layout', './layouts/full')
app.set('view engine', 'ejs') // use engine ejs

app.use(bodyparser.urlencoded({extended: true})) // Our help with pass request body
app.use('/', routes) // Isso informa ao nosso app que sempre que receber uma solicitação com "/", use o arquivo de rotas.

module.exports = app // export our app variable for used in other app
