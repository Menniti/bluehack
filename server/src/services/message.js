'use strict'

const Message = require('../models/message')
    , { Observable } = require('rxjs')
    , { newObjectId } = require('./util')

const mockData = [
    {
        "comments" : "Oi Doutor, ontem eu caí e cortei o joelho",
    },
    {
        "comments" : "Olá, tudo bem iremos ajustar a sua medicação para amanhã",
    }
]

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
            const messageId = newObjectId(id)
            return Message.find({ _id: messageId }).then(model => {
                if( model.length < 1) return Promise.reject('Message do not found')
                return Message.find({ parent: messageId }).then(comments => {
                    console.log('=>', comments)
                    // return Object.assign({}, model, { comments })
                    return mockData
                })
            })
        },
    }

})  