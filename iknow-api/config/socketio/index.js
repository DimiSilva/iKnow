const socketio = require('socket.io')
const http = require('http')

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
            console.log('testes')
            return next(new Error('invalid userId'))
        }
        socket.userId = userId
        next()
    })

    io.on('connection', (socket) => {
        console.log(`join ${socket.userId}`)
        socket.join(socket.userId)
        socket.on('private message', ({ content, to }) => {
            console.log(`to ${to}`)
            socket.to(to).emit('private message', {
                content,
                from: socket.userId,
            })
        })
        socket.on('disconnect', () => {
            console.log('[SOCKET] Disconnect => A connection was disconnected')
        })
    })
}

module.exports = setupChat
