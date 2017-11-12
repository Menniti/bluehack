'use strict';

const service = require('../services/message')

module.exports = (function(router) {
    router.get('/messagesAll', async (ctx) => {
        await service()
            .getAll()
            .then(data => {ctx.body = data})
            .catch(err => ctx.throw(500, err.message))
    }),
    router.get('/messages/:id', async(ctx) => {
        await service()
            .findById(ctx.params.id)
            .then(data => {ctx.body = data})
            .catch(err => ctx.throw(500, err.message))
    }),
    router.post('/messages/createNewMessage', async (ctx) => {
        await service()
            .save(ctx.request.body)
            .then(data => {ctx.body = data})
            .catch(err => ctx.throw(500, err.message))      
    })
})