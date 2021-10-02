const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onReceiveAcknowledgement = require('./on-receive-acknowledgement')

const receivedAcknowledgement = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.RECEIVED_ACKNOWLEDGEMENT, (message) => {
            onReceiveAcknowledgement(JSON.parse(message.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(receivedAcknowledgement, 10000)
    })

module.exports = receivedAcknowledgement
