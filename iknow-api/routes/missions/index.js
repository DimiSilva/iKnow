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
    app.put(
        `${endpoint}/accept/:missionId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.accept)],
        missionsController.accept,
    )
    app.put(
        `${endpoint}/cancel/:missionId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.cancel)],
        missionsController.cancel,
    )
    app.put(
        `${endpoint}/complete/:missionId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.complete)],
        missionsController.complete,
    )
    app.put(
        `${endpoint}/unbind/:missionId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.unbind)],
        missionsController.unbind,
    )
    app.put(
        `${endpoint}/give-up/:missionId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.giveUp)],
        missionsController.giveUp,
    )
    app.get(
        `${endpoint}`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.get)],
        missionsController.get,
    )
    app.get(
        `${endpoint}/my`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.getMine)],
        missionsController.getMine,
    )
    app.get(
        `${endpoint}/:missionId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.getOne)],
        missionsController.getOne,
    )
}

module.exports = setupRoutes
