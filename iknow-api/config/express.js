const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const setupRoutes = require('../routes')

const { errorHandler } = require('../middlewares')

const expressConfig = () => {
    const app = express()

    app.get('/status', (req, res) => { res.status(200).end() })
    app.head('/status', (req, res) => { res.status(200).end() })

    app.use(cors())
    app.use(morgan('dev'))
    app.use(express.json())

    setupRoutes(app)

    app.use(errorHandler)

    return app
}

module.exports = expressConfig
