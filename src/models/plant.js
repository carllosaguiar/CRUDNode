const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    scientificName: {
        type: String,
        require: true
    },
    popularName: {
        type: String,
        require: true
    },
    therapeuticProperty: {
        type: String,
        require: true
    },
    wayOfUse: {
        type: String,
        require: true
    },
    extractionMethod: {
        type: String,
        require: true
    },
    regionOfOrigin: {
        type: String,
        require: true
    },
    extraction: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Plant', plantSchema)