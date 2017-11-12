'user strict'

const mongoose = require('mongoose')
, db = require('../data/database')

const messageSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        default: null
    },
    created_at:{
        default: new Date(),
        type: Date
    }
})

module.exports = db.model('Message', messageSchema)