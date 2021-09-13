const express = require('express')
const cors = require('cors')

const setupRoutes = require('../routes')

const { errorHandler } = require('../middlewares')

const expressConfig = () => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    setupRoutes(app)

    app.use(errorHandler)

    app.listen(process.env.PORT, () => {
        console.info(`api running on port ${process.env.PORT}`)
    })
}

module.exports = expressConfig
