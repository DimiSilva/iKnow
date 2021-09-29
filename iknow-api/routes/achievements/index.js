const { Express } = require('express')

const { achievementsController } = require('../../controllers')
const validators = require('./validators')
const middlewares = require('../../middlewares')

const endpoint = '/achievements'

/**
 * @param {Express} app
 */
const setupRoutes = (app) => {
    app.get(
        `${endpoint}`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.get)],
        achievementsController.get,
    )
}

module.exports = setupRoutes
