'use strict' 

const uuid = require('uuid/v4')
    , { newObjectId } = require('./util')
    , Request = require('../models/request')
    , Doctor = require('../models/doctor')
    , Patient = require('../models/patient')
    , { Observable } = require('rxjs')

const MAX_REQUESTS = 3

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

    const transformData = (arr, config) => {
        if (arr.length < 1) return Promise.reject('Request not found for this Code.')
        
        let request$, doctor$, patient$, data$ = null
        let result = []

        arr.forEach(item => {
            request$ = Observable.of(item)
            doctor$ = (config.doctor ? Observable.fromPromise(Doctor.find({ _id: item.doctor }).then(record => record[0])) : Observable.of({}))
            patient$ = (config.patient ? Observable.fromPromise(Patient.find({ _id: item.patient }).then(record => record[0])) : Observable.of({}))
            
            result.push(Observable.zip(doctor$, patient$, request$).map(convert))
        })

        return Observable.from(result).mergeMap(obs => obs).map(value => value).bufferCount(5).toPromise()
    }

    return {
        getAll() {
            return Request.find({})
        },

        findById(id) {
            return Request.find({ _id: id }).then(model => {
                return transformData(model, { doctor: true, patient: true })
            })
        },

        findByPatient(code) {
            return Request.find({ patient: code })
                .sort({ created_at: -1 })
                .limit(MAX_REQUESTS)
                .then(model => {
                    return transformData(model, { doctor: true, patient: false })
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
