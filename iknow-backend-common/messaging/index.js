const amqplib = require('amqplib')

const connect = () => amqplib.connect(process.env.MESSAGING_SERVICE_CONNECTION_URL)
    .then((conn) => conn.createChannel())

const createQueue = (channel, queue) => new Promise((resolve, reject) => {
    try {
        channel.assertQueue(queue, { durable: true })
        resolve(channel)
    } catch (err) { reject(err) }
})

const sendToQueue = (queue, message) => connect()
    .then((channel) => createQueue(channel, queue))
    .then((channel) => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))

const consume = (queue, callback) => connect()
    .then((channel) => createQueue(channel, queue))
    .then((channel) => channel.consume(queue, callback, { noAck: true }))

module.exports = {
    sendToQueue,
    consume,
}
