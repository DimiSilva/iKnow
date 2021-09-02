const { Express } = require('express')

const setupUsersRoutes = require('./users')

/**
 * @param {Express} app
 */

const setupRoutes = app => {
  setupUsersRoutes(app)
}

module.exports = setupRoutes
