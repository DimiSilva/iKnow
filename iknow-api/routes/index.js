const { Express } = require('express')

const setupUsersRoutes = require('./users')
const setupMissionsRoutes = require('./missions')
const setupAchievementsRoutes = require('./achievements')
const setupAcknowledgementsRoutes = require('./acknowledgements')
const setupMessagesRoutes = require('./messages')

/**
 * @param {Express} app
 */

const setupRoutes = (app) => {
    setupUsersRoutes(app)
    setupMissionsRoutes(app)
    setupAchievementsRoutes(app)
    setupAcknowledgementsRoutes(app)
    setupMessagesRoutes(app)
}

module.exports = setupRoutes
