const express = require('express')
const router = express.Router()


// Get all plants
router.get('/', (req, res) => {
    //res.send('Hello Carlos')
    res.render('plants/new.ejs', { title : 'CRUD | Add new Title' });
})

// Get one plant by ID
router.get('/:id', (req, res) => {
    res.render('home', { title: 'CRUD | Get plant by ID' });
})

// Create one new plant title
router.post('/new', (req, res) => {
    db.collection.save(req.body, (err, result) => {
        if(err)
            return console.log(err)
        console.log('Salvo no mongodb')
        res.render('plants/new.ejs', { title : 'CRUD | With Node.js'});
    })
})

//Update one plant by ID - partial update with method patch
router.patch('/:id', (req, res) => {

})

// Delete one plant by ID
router.delete('/:id', (req, res) => {

})

module.exports = router;
