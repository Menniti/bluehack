'use strict'

const Message = require('../models/message')
    , { Observable } = require('rxjs')

module.exports = (function() {
    
    return {
        getAll() {
            return Message.find({})
        },
        save(message) {
            let isNewMessage = (message.parent == null)
            if(message.content.length == 0 || message.owner.length == 0 ) {
                throw new Error({message: 'Owner e content sao obrigatorios'})
            }

            const model = new Message(message)

            return model.save()
        },
        findById(id) {
            return Message.find({ _id: id}).then(model => {
                if( model.length < 1) return Promise.reject('Message do not found')
                console.log(Message.find({ owner: model[0].owner }))
                
                let messages$ = Observable.of(model[0])
                let messageFiltered$ = Observable.fromPromise(Message.find({ owner: model[0].owner }).then(value => value[0]))
                // console.log(messageFiltered$)
                let data$ = Observable.
            })
        },
    }

})