const http = require('http')

require('dotenv').config()
require('./config/database')()

const app = require('./config/express')()

const server = http.createServer(app)

require('./config/socketio')(server)

server.listen(process.env.PORT, () => {
    console.info(`api running on port ${process.env.PORT}`)
})
