const Clinic = require('../models/clinic')
const { json } = require('./util')

module.exports = (function() {
    
    return {
        getAll() {
            return Clinic.find({})
        }
    }

})
