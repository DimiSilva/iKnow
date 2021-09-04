const express = require('express')

const setupRoutes = require('../routes')

const { errorHandler } = require('../middlewares')

const expressConfig = () => {
    const app = express()

    app.use(express.json())

    setupRoutes(app)

    app.use(errorHandler)

    app.listen(process.env.PORT, () => {
        console.info(`api running on port ${process.env.PORT}`)
    })
}

module.exports = expressConfig
