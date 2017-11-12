'user strict'

const mongoose = require('mongoose')
    , db = require('../data/database')

const Schema = mongoose.Schema

const requestSchema = new Schema({
    type: { type: Number, required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', turnOn: false },
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', turnOn: false },
    content: { type: String, required: true },
    signature: { type: String, required: true },
    created_at: { type: Number, required: true }
})

module.exports = db.model('Request', requestSchema)
