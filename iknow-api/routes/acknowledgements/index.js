const { Express } = require('express')

const { acknowledgementsController } = require('../../controllers')
const validators = require('./validators')
const middlewares = require('../../middlewares')

const endpoint = '/acknowledgements'

/**
 * @param {Express} app
 */
const setupRoutes = (app) => {
    app.get(
        `${endpoint}`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.get)],
        acknowledgementsController.get,
    )
}

module.exports = setupRoutes
