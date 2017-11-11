'use strict'

const Router = require('koa-router')
    , uuid = require('uuid/v4')
    , clinic = require('./clinic')
    , doctor = require('./doctor')
    , patient = require('./patient')

const router = new Router()

clinic(router)
doctor(router)
patient(router)

router.get('/', (ctx) => {
    ctx.body = 'Server is ready!'
})

router.get('/hashgen', (ctx) => {
    ctx.body = { code: uuid() } 
})

router.get('/health', (ctx) => {
    let dbOk = (ctx.state.db && ctx.state.db.open) ? true : false
    ctx.body = { status: 'OK', database: (dbOk ? 'OK' : 'Fail') }
})

module.exports = router
