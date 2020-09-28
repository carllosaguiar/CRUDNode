const express = require('express')
const route = express.Router()
const db = require('mongodb').MongoClient

// This route will be used for show a initial page.
route.get('/', function(req, res){
    res.render('home', { title : 'CRUD | With Node.js'});
})

// plants
route.post('/', function(req, res){
    db.collection('plants').save(req.body, (err, result) => {
        if(err)
            return console.log(err)
        console.log('Salvo no mongodb')
        res.render('home', { title : 'CRUD | With Node.js'});
    })
})


module.exports = route;
