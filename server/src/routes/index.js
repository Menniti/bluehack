'use strict'

const Router = require('koa-router')
    , clinic = require('./clinic')

const router = new Router()

clinic(router)

router.get('/', (ctx) => {
    ctx.body = 'Server is ready!'
})

router.get('/health', (ctx) => {
    let dbOk = (ctx.state.db && ctx.state.db.open) ? true : false
    ctx.body = { status: 'OK', database: (dbOk ? 'OK' : 'Fail') }
})

module.exports = router