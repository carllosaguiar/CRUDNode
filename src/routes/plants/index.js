const express = require('express');
const route = express.Router();


// This route will be used for show a initial page.
route.get('/', function(req, res){
    res.render('home', { title : 'CRUD | With Node.js'});
})

// plants
route.post('/', function(req, res){
    console.log(req.body)
    res.render('home', { title : 'CRUD | With Node.js'});
})


module.exports = route;
