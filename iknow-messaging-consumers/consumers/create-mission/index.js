const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onCreateMission = require('./on-create-mission')

const createMission = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.CREATED_MISSION, (message) => {
            onCreateMission(JSON.parse(message.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(createMission, 10000)
    })

module.exports = createMission
