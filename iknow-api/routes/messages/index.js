const { Express } = require('express')

const { messagesController } = require('../../controllers')
const validators = require('./validators')
const middlewares = require('../../middlewares')

const endpoint = '/messages'

/**
 * @param {Express} app
 */
const setupRoutes = (app) => {
    app.get(
        `${endpoint}/my`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.getMine)],
        messagesController.getMine,
    )
}

module.exports = setupRoutes
