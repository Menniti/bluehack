'user strict'

const mongoose = require('mongoose')
    , db = require('../data/database')

const patientSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    cpf: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    birthday: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: false }
})

module.exports = db.model('Patient', patientSchema)
