const Clinic = require('../models/clinic')
const { json } = require('./util')
const { Observable } = require('rxjs')

module.exports = (function() {
    
    return {
        getAll() {
            return Observable.create(observer => {
                Clinic
                .find()
                .exec((clinic, err) => {
                    if(err) {
                        return observer.error({ message: err })
                    }
                    observer.next(clinic)
                    observer.complete()
                })    
            })
               
        },
    }
});

