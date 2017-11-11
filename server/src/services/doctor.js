'use strict' 

const Doctor = require('../models/doctor')

module.exports = (function() {
    
    return {
        getAll() {
            return Doctor.find({})
        }
    }

})
