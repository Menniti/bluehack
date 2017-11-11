'use strict'

const { Observable } = require('rxjs')

function extractId(record) {
    let url = record.url.substr(0, record.url.length - 1)
    return url.substr(url.lastIndexOf('/') + 1)
}

module.exports = (function(db) {
    let key = null

    return {
        createTables() {
            db.serialize(() => {
                db.run(`
                    CREATE TABLE IF NOT EXISTS vehicles (
                    id INT NOT NULL PRIMARY KEY, name VARCHAR(50), model VARCHAR(35), 
                    manufacturer VARCHAR(50), credits INT, length DECIMAL(10,2), crew INT,
                    speed INT, passengers INT, capacity INT, consumables VARCHAR(30),
                    class VARCHAR(30), created VARCHAR(30))
                `)        
            })
        },

        isEmpty(tableName) {
            return Observable.create(observer => {
                db.get(`SELECT COUNT(*) as total FROM ${tableName};`, [], (err, row) => {
                    if (err) {
                        observer.error(err)
                        return
                    }
                    observer.next(row.total == 0)
                    observer.complete()
                })
            })
        },

        fillVehicles(vehicles) {
            let stmt = db.prepare("INSERT INTO vehicles VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
            vehicles.forEach(item => {
                key = extractId(item)
                stmt.run(key, item.name, item.model, item.manufacturer, 
                    item.cost_in_credits, item.length, item.crew, 
                    item.max_atmosphering_speed, item.passengers,
                    item.cargo_capacity, item.consumables, item.vehicle_class, item.created)
            })
            stmt.finalize()
        }
    }

})
