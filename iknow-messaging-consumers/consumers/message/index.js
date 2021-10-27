const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onMessage = require('./on-message')

const message = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.MESSAGES, (messagee) => {
            onMessage(JSON.parse(messagee.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(message, 10000)
    })

module.exports = message
