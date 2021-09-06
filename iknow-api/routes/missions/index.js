const { Express } = require('express')

const { missionsController } = require('../../controllers')
const validators = require('./validators')
const middlewares = require('../../middlewares')

const endpoint = '/missions'

/**
 * @param {Express} app
 */
const setupRoutes = (app) => {
    app.post(
        `${endpoint}`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.create)],
        missionsController.create,
    )
}

module.exports = setupRoutes
