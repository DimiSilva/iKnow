import { Socket } from 'socket.io-client'

const context: {
    connectToSocket: (userId: string) => void,
    socket: Socket | void
} = {
    connectToSocket: (userId: string) => undefined,
    socket: undefined,
}

export default { context }
