const express = require('express')
const router = express.Router()


// Get all plants
router.get('/', (req, res) => {
    //res.send('Hello Carlos')
    res.render('home', { title : 'CRUD | With Node.js' });
})

// Get one plant by ID
router.get('/:id', (req, res) => {
    res.render('home', { title: 'CRUD | With Node.js' });
})

// Create one new plant title
router.post('/', (req, res) => {
    db.collection.save(req.body, (err, result) => {
        if(err)
            return console.log(err)
        console.log('Salvo no mongodb')
        res.render('home', { title : 'CRUD | With Node.js'});
    })
})

router.patch('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
