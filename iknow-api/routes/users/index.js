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
        `${endpoint}/login-signal`,
        [middlewares.authentication],
        usersController.loginSignal,
    )
    app.post(
        `${endpoint}/register`,
        [middlewares.requestBodyValidator(validators.register)],
        usersController.register,
    )
    app.post(
        `${endpoint}/add-contact/:userId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.addContact)],
        usersController.addContact,
    )
    app.post(
        `${endpoint}/remove-contact/:userId`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.removeContact)],
        usersController.removeContact,
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
    app.get(
        `${endpoint}`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.get)],
        usersController.get,
    )
    app.get(
        `${endpoint}/contacts`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.getContacts)],
        usersController.getContacts,
    )
    app.put(
        `${endpoint}/my-profile-data`,
        [middlewares.authentication, middlewares.requestBodyValidator(validators.updateMyProfileData)],
        usersController.updateMyProfileData,
    )
}

module.exports = setupRoutes
