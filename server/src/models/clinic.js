'user strict';
const mongoose = require('mongoose')

const db = require('../setup/databaseMongoDB')

const clinicSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    cnpj: {
        required: true,
        type: String
    }
})

module.exports = db.model('Clinic', clinicSchema);

