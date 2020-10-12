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

router.get('/search', async (req, res) => {
    const plants = await Plant.find()
    res.render('plants/search.ejs', {plants: plants, title: 'CRUD | Search plant by ID' })
})


router.get('/view/:id', getPlants, (req, res) => {
    res.render('plants/view-plant.ejs', {plant: res.json(res.plants), title: 'CRUD | Search plant by ID' })
})


router.get('/update/:id', getPlants, (req, res) => {
    res.render('plants/update-plant.ejs', {plant: res.plants, title: 'CRUD | Update Plant' })
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

router.get('/list', async (req, res) => {
    const plants = await Plant.find()
    res.render('plants/list.ejs', { plants: plants, title: 'CRUD | List all titles' })
})


//Update one plant by ID - partial update with method patch
router.patch('/:id', getPlants, async (req, res) => {
    if(req.body.scientificName != null){
        res.plants.scientificName = req.body.scientificName
    }

    if (req.body.popularName != null){
        res.plants.popularName = req.body.popularName
    }

    if (req.body.therapeuticProperty != null){
        res.plants.therapeuticProperty = req.body.therapeuticProperty
    }

    if (req.body.wayOfUse != null){
        res.plants.wayOfUse = req.body.wayOfUse
    }

    if (req.body.extractionMethod != null){
        res.plants.extractionMethod = req.body.extractionMethod
    }

    if (req.body.regionOfOrigin != null){
        res.plants.regionOfOrigin = req.body.regionOfOrigin
    }

    if (req.body.extraction != null){
        res.plants.extraction = req.body.extraction
    }

    try{
        await res.plants.save()
        const plants = await Plant.find()
        res.render('plants/show.ejs', {plants: plants, title : 'CRUD | View all titles'});        
    } catch {
        res.status(400).json({ message: err.message })
    }
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
        const plants = await Plant.find()
        res.render('plants/remove.ejs', { plants: plants, title: 'CRUD | Remove a plant by ID' })
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
