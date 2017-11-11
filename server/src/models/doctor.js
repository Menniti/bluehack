'user strict'

const mongoose = require('mongoose')
    , db = require('../data/database')

const doctorSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    cid: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    speciality: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    }
})

module.exports = db.model('Doctor', doctorSchema)
