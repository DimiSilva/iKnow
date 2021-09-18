const concludedMissions = require('./concluded-missions')
const contacts = require('./contacts')
const createdMissions = require('./created-missions')
const logins = require('./logins')
const messages = require('./messages')
const receivedAcknowledgments = require('./received-acknowledgments')
const sendAcknowledgments = require('./send-acknowledgments')

module.exports = [
    ...concludedMissions,
    ...contacts,
    ...createdMissions,
    ...logins,
    ...messages,
    ...receivedAcknowledgments,
    ...sendAcknowledgments,
]
