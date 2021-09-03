const { Express } = require('express')

const usersController = require('../../controllers/users')
const validationSchemas = require('./validation-schemas')
const middlewares = require('../../middlewares')

const endpoint = '/users'

/**
 * @param {Express} app
 */

const setupUsersRoutes = (app) => {
    app.post(
        `${endpoint}/login`,
        [middlewares.requestBodyValidator(validationSchemas.login)],
        usersController.login,
    )
    app.post(
        `${endpoint}/register`,
        [middlewares.requestBodyValidator(validationSchemas.register)],
        usersController.register,
    )
}

module.exports = setupUsersRoutes
