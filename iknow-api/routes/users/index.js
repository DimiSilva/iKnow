const { Express } = require('express')

const usersController = require('../../controllers/users')
const validators = require('./validators')
const middlewares = require('../../middlewares')

const endpoint = '/users'

/**
 * @param {Express} app
 */
const setupUsersRoutes = (app) => {
    app.post(
        `${endpoint}/login`,
        [middlewares.requestBodyValidator(validators.login)],
        usersController.login,
    )
    app.post(
        `${endpoint}/register`,
        [middlewares.requestBodyValidator(validators.register)],
        usersController.register,
    )
}

module.exports = setupUsersRoutes
