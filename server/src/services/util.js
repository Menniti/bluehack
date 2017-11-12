'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

module.exports = (function() {
    return {
        genId() {
            let min = 100, max = 999
            return Math.floor(Math.random() * (max - min)) + min
        },

        json(response, code, msg) {
            response.status(code)
            response.json(msg)
        },

        newObjectId(value) {
            return mongoose.Types.ObjectId(value)
        }
    }
})()
