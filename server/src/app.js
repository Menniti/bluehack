'use strict'

const path = require('path')
    , koa = require('koa')
    , cors = require('koa2-cors')
    , bodyParser = require('koa-bodyparser')
    , serve = require('koa-static')
    , router = require('./routes')

const app = new koa()

app.use(bodyParser())
app.use(cors())
const db = require('./setup/databaseMongoDB');

// handle general errors
app.on('error', (err) => console.error('[ERROR]', err))

// add database reference into app's context
app.use(async (ctx, next) => {
    ctx.state.db = db
    await next()
})

// Eventos de encerramento de processos

var graceFulShutDown = (msg, callback) => {
    db.close(function(){
        console.log('Mongoose disconnect through ' + msg);
        callback();
    })
}

process.once('SIGUSR2', () => {
    graceFulShutDown('nodemon restart', () => {
        //envia o sinal para matar os processo SIGUSR2
        process.kill(process.pid, 'SIGUSR2')
    }); 
});

// rastreadores quando a aplicacao encerra
// Rastreia o sinal SIGINT quando a aaplicacao e encerrada
process.on('SIGNINT', () => {
    graceFulShutDown('app terminator', ()=>{
        process.exit(0);
    })
});

// set up database, if it necessary
// setup(db)

// register all routers
app.use(router.routes())

module.exports = app
