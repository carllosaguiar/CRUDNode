const express = require('express');
const route = express.Router();


// This route will be used for show a initial page.
route.get('/', function(req, res){
    res.render('home', { title : 'Home Page'});
})
    
module.exports = route;
