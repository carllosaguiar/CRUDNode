const express = require('express') // import express module
const path = require('path')  
const expressLayouts = require('express-ejs-layouts')
const routes = require('./src/routes/plants/index') //import routes for our app
const bodyparser = require('body-parser')
const objectID = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://carlos:<>@cluster0.fynks.mongodb.net/<crudavicena>?retryWrites=true&w=majority"
const port = 3000

const app = express()
//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set template engine
app.use(expressLayouts)
app.set('layout', './layouts/full')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') // use engine ejs

app.use(bodyparser.urlencoded({extended: true})) // Our help with pass request body
app.use('/', routes) // Isso informa ao nosso app que sempre que receber uma solicitação com "/", use o arquivo de rotas.

//Create connection
MongoClient.connect(uri, (err, client) => {
    if(err)
        return console.log(err)
    db = client.db('crudavicena')
})

app.listen(port, () => {
    console.log('Server run in port ' + port)
})

module.exports = app // export our app variable for used in other app
