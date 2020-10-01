const express = require('express')
const router = express.Router()


// Get all plants
router.get('/', (req, res) => {
    //res.send('Hello Carlos')
    res.render('home', { title : 'CRUD | Welcome' });
})

module.exports = router
