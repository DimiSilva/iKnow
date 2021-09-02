const { Express } = require('express')

const usersController = require('../../controllers/users')

const endpoint = '/users'

/**
 * @param {Express} app
 */

const setupUsersRoutes = app => {
  app.post(`${endpoint}/login`, usersController.login)
}

module.exports = setupUsersRoutes
