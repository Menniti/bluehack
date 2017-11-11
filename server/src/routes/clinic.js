'use strict'

const service = require('../services/clinic')

module.exports = (function(router) {
    router.get('/clinics', async (ctx) => {
        await service()
            .getAll()
            .then(data => { ctx.body = data })
            .catch(err => ctx.throw(500, err.message))
    })
})