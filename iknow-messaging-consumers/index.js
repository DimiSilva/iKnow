const setupDatabase = require('./config/setup-database')
const setupConsumers = require('./consumers')

setupDatabase()
setupConsumers()
