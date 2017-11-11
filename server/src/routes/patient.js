'use strict'

const service = require('../services/patient')

module.exports = (function(router) {
    router.get('/patients', async (ctx) => {
        await service()
            .getAll()
            .then(data => { ctx.body = data })
            .catch(err => ctx.throw(500, err.message))
    })
})
