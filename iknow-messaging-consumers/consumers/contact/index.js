const messaging = require('iknow-backend-common/messaging')
const iknowCommon = require('iknow-common')
const onAddContact = require('./on-add-contact')

const contact = () => messaging
    .consume(
        iknowCommon.enums.messagingQueues.CONTACT, (message) => {
            onAddContact(JSON.parse(message.content.toString())).catch((e) => {
                console.log(e)
                throw e
            })
        },
    )
    .catch((e) => {
        console.log(e)
        setTimeout(contact, 10000)
    })

module.exports = contact
