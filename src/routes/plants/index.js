const express = require('express');
const route = express.Router();


// This route will be used for show a initial page.
route.get('/', function(req, res){
    res.render('home', { title : 'CRUD | With Node.js'});
})


// Crud of plants

// List all plants.
route.get('/plants', function(req, res){
    res.render('plants', { title : 'CRUD | Show Plants'})
})

// Added a new title
route.get('/plants/new', function(req, res){
    res.render('plants/new.ejs', { title : 'CRUD | Added new Title'})
})

// Update a title
route.get('/plants/update', function(req, res){
    res.render('plants/update.ejs', { title : 'CRUD | Update Title'})
})

// Delete a title
route.get('/plants/remove', function(req, res){
    res.render('plants/remove.ejs', { title : 'CRUD | Remove Title'})
})


// Create a new title in database

route.post('/add', function(req, res){
    console.log(req.body)
    res.render('plants', { title : 'CRUD | With Node.js'});
})

route.put('/change', function(req, res){
    console.log(req.body)
    res.render('plants', { title : 'CRUD | With Node.js'})
})

module.exports = route;
