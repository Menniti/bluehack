'use strict'

const mongoose = require('mongoose');
require('../models/clinic');

// definindo a variavel de conneccao com o mongoose
mongoose.Promise = require('bluebird');

const dbURI = 'mongodb://bluehack.keuller.com/bluehack'

const db = mongoose.createConnection(dbURI);

// rastreamento de eventos de connecao com o mongoose
db.on('connect', () => {
    console.log('mongoose connect to ' + dbURI);
});

db.on('error', () => {
    console.log('Mongoose connection error ' + err);
});

db.on('disconnect', () => {
    console.log('Mongoose Disconnect')
});

module.exports = db
