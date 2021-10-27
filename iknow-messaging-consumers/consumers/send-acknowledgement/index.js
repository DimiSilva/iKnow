const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onSendAcknowledgement = require('./on-send-acknowledgement')

const sendAcknowledgement = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.SEND_ACKNOWLEDGEMENT, (message) => {
            onSendAcknowledgement(JSON.parse(message.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(sendAcknowledgement, 10000)
    })

module.exports = sendAcknowledgement
