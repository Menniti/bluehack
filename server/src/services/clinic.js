'use strict' 

const Clinic = require('../models/clinic')

module.exports = (function() {
    
    return {
        getAll() {
            return Clinic.find({})
        }
    }

})
