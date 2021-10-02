const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onCompleteMission = require('./on-complete-mission')

const completeMission = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.CONCLUDED_MISSION, (message) => {
            onCompleteMission(JSON.parse(message.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(completeMission, 10000)
    })

module.exports = completeMission
