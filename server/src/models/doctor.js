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
    speciality: { type: String, required: true },
    phone: { type: String, required: true },
    hash: { type: String, required: true }
})

module.exports = db.model('Doctor', doctorSchema)
