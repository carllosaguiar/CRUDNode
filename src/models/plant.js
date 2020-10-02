const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    scientificName: {
        type: String,
        required: true
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
        required: true
    },
    extractionMethod: {
        type: String,
        required: true
    },
    regionOfOrigin: {
        type: String,
        required: true
    },
    extraction: {
        type: Number,
        required: true
    },
    registrationDate: {
        type: Date,
        require: true,
        default: Date.new
    }
})

module.exports = mongoose.model('Plant', plantSchema)