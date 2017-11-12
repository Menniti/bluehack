'use strict'

const service = require('../services/request')

module.exports = (function(router) {
    router.get('/requests', async (ctx) => {
        await service()
            .getAll()
            .then(data => { ctx.body = data })
            .catch(err => ctx.throw(500, err.message))
    })

    router.get('/requests/:id', async (ctx) => {
        await service().findById(ctx.params.id)
            .then(data => { ctx.body = data })
            .catch(err => ctx.throw(500, err.message))
    })

    router.post('/requests', async (ctx) => {
        await service().save(ctx.request.body)
            .then(data => { ctx.body = data })
            .catch(err => ctx.throw(500, err.message))
    })
})
