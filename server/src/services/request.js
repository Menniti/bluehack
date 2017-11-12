'use strict' 

const uuid = require('uuid/v4')
    , { newObjectId } = require('./util')
    , Request = require('../models/request')
    , Doctor = require('../models/doctor')
    , Patient = require('../models/patient')
    , { Observable } = require('rxjs')

module.exports = (function() {

    const convertType = (value) => {
        switch(value) {
            case 4: return 'Atestado'
            case 3: return 'Procedimento'
            case 2: return 'Exame'
            default: return 'Receita'
        }
    }

    const convert = (data) => { 
        let result = Object.assign({}, data[2]._doc)

        result.type = convertType(data[2].type)
        result.doctor = data[0]
        result.patient = data[1]
        result.created_at = new Date(data[2].created_at).toLocaleDateString()
        return result
    }

    return {
        getAll() {
            return Request.find({})
        },

        findById(id) {
            return Request.find({ _id: id }).then(model => {
                if (model.length < 1) return Promise.reject('Request not found.')

                let request$ = Observable.of(model[0])
                let doctor$ = Observable.fromPromise(Doctor.find({ _id: model[0].doctor }).then(record => record[0]) )
                let patient$ = Observable.fromPromise(Patient.find({ _id: model[0].patient }).then(record => record[0]) )
                
                let data$ = Observable.zip(doctor$, patient$, request$).map(convert)
                return data$.toPromise()
            })
        },

        save(data) {
            const nid = uuid().replace(/\-/g, '')

            if (data.content == '') 
                return Promise.reject('Content cannot be null')

            if (!data.type || (data.type < 1 && data.type > 4))
                return Promise.reject('Invalid request type ')

            const model = new Request({
                type: data.type || 1,
                doctor: newObjectId(data.doctor),
                patient: newObjectId(data.patient),
                signature: nid,
                content: data.content,
                created_at: Date.now()
            })
            
            return model.save()
        }
    }

})
