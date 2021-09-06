const { Express } = require('express')

const setupUsersRoutes = require('./users')
const setupMissionsRoutes = require('./missions')

/**
 * @param {Express} app
 */

const setupRoutes = (app) => {
    setupUsersRoutes(app)
    setupMissionsRoutes(app)
}

module.exports = setupRoutes
