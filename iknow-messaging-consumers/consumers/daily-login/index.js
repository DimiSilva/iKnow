const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onLogin = require('./on-login')

const dailyLogin = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.LOGIN, (message) => {
            onLogin(JSON.parse(message.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(dailyLogin, 10000)
    })

module.exports = dailyLogin
