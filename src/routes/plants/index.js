const express = require('express')
const router = express.Router()
const Plant = require('../../models/plant')


// Get all plants
router.get('/show', async (req, res) => {
    try{
        const plants = await Plant.find()
        res.render('plants/show.ejs', {plants: plants, title : 'CRUD | View all titles'});        
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Render form to search plant by ID
router.get('/search', async (req, res) => {
    res.render('plants/search.ejs', {title: 'CRUD | Search plant by ID' })
})

// Get one plant by ID
router.get('/view/:id', getPlants, async (req, res) => {
    res.render('plants/view.ejs', { plants: res.plants, title: 'CRUD | Get plant by ID' })
})

// Render form for added new title
router.get('/new', async (req, res) => {
    res.render('plants/new.ejs', { title: 'CRUD | Add new title' })
})

// Create one new plant title
router.post('/add', async (req, res) => {
    const plant = new Plant({
        scientificName: req.body.scientificName,
        popularName: req.body.popularName,
        therapeuticProperty: req.body.therapeuticProperty,
        wayOfUse: req.body.wayOfUse,
        extractionMethod: req.body.extractionMethod,
        regionOfOrigin: req.body.regionOfOrigin,
        extraction: req.body.extraction
    })

    try{
        await plant.save()
        res.render('plants/new.ejs', {title: 'CRUD | Add new title' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Update one plant by ID - partial update with method patch
router.patch('/:id', (req, res) => {

})

// Render form to search plant by ID
router.get('/remove', async (req, res) => {
    const plants = await Plant.find()
    res.render('plants/remove.ejs', { plants: plants, title: 'CRUD | Remove a plant by ID' })
})

// Delete one plant by ID
router.delete('/:id', getPlants, async (req, res) => {
    try{
        await res.plants.remove()
        res.json({message: 'Deleted this plant'})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// This is a function of middleware
async function getPlants(req, res, next) {
    try{
        plants = await Plant.findById(req.params.id)
        if (plants == null){
            return res.status(404).json({ message: 'Cant find plants' })
        }            
    }catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.plants = plants
    next()
}

module.exports = router;
