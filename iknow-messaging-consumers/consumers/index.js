const createMissionConsumer = require('./create-mission')
const completeMissionConsumer = require('./complete-mission')
const dailyLoginConsumer = require('./daily-login')
const contactConsumer = require('./contact')
const messageConsumer = require('./message')
const sendAcknowledgementConsumer = require('./send-acknowledgement')
const receivedAcknowledgementConsumer = require('./received-acknowledgement')

const setupConsumers = () => {
    createMissionConsumer()
    completeMissionConsumer()
    dailyLoginConsumer()
    contactConsumer()
    messageConsumer()
    sendAcknowledgementConsumer()
    sendAcknowledgementConsumer()
    receivedAcknowledgementConsumer()
}

module.exports = setupConsumers
