const socketio = require('socket.io')
const http = require('http')
const { Message } = require('../../models')

/**
 * @param {http.Server} server
 */

const setupChat = (server) => {
    const io = socketio(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    })

    io.use((socket, next) => {
        const { userId } = socket.handshake.auth
        if (!userId) {
            return next(new Error('invalid userId'))
        }
        socket.userId = userId
        next()
    })

    io.on('connection', (socket) => {
        socket.join(socket.userId)
        socket.on('private message', ({ content, to }) => {
            socket.to(to).emit('private message', {
                content,
                from: socket.userId,
            })
            const newMessage = new Message({ to, from: socket.userId, content })
            newMessage.save()
        })
    })
}

module.exports = setupChat
