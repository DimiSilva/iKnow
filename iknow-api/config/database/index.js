const mongoose = require('mongoose')
const seed = require('./seed')

const setupDatabase = () => {
    mongoose.connect(process.env.MONGO_CONNECTION_URL)

    mongoose.connection.on('connected', () => {
        console.log('Database connected')
        seed()
    })

    mongoose.connection.on('error', (err) => {
        console.log('An database error as occurred')
        console.log(err)
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected')
    })

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            process.exit(0)
        })
    })
}

module.exports = setupDatabase
