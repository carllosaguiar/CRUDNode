require('dotenv').config()
const express = require('express') // import express module
const app = express()
const mongoose = require('mongoose')
const path = require('path')  
const expressLayouts = require('express-ejs-layouts')
const bodyparser = require('body-parser')

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set template engine
app.use(expressLayouts)
app.set('layout', './layouts/full')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') // use engine ejs

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))
app.use(express.json())
app.listen(process.env.PORT, () => console.log('server started'))

app.use(bodyparser.urlencoded({extended: true})) // Our help with pass request body

// Passing routes that the Server need manipulate
//const router = require('./src/routes/index')
//app.use('/', router)

const router = require('./src/routes/index') //import routes for our app
app.use('/', router) // Isso informa ao nosso app que sempre que receber uma solicitação com "/algumaCoisa", use o arquivo de rotas.

const routerPlants = require('./src/routes/plants/index') //import routes for our app
app.use('/plants', routerPlants) // Isso informa ao nosso app que sempre que receber uma solicitação com "/algumaCoisa", use o arquivo de rotas.

//export app
module.exports = app // export our app variable for used in other app