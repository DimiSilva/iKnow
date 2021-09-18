const { Express } = require('express')

const { usersController } = require('../../controllers')
const validators = require('./validators')
const middlewares = require('../../middlewares')

const endpoint = '/users'

/**
 * @param {Express} app
 */
const setupRoutes = (app) => {
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
    app.get(
        `${endpoint}/profile-data/:userId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.getProfileData)],
        usersController.getProfileData,
    )
    app.get(
        `${endpoint}/my-profile-data`,
        [middlewares.authentication],
        usersController.getMyProfileData,
    )
    app.put(
        `${endpoint}/my-profile-data`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.updateMyProfileData)],
        usersController.updateMyProfileData,
    )
}

module.exports = setupRoutes
