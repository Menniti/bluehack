'use strict' 

const Patient = require('../models/patient')

module.exports = (function() {
    
    return {
        getAll() {
            return Patient.find({})
        }
    }

})
