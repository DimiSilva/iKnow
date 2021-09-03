const express = require('express')

const setupRoutes = require('../routes')

const expressConfig = () => {
    const app = express()

    app.use(express.json())

    setupRoutes(app)

    app.use((err, req, res, next) => {
        res.status(500).send({ error: err.message })
    })

    app.listen(process.env.PORT, () => {
        console.info(`api running on port ${process.env.PORT}`)
    })
}

module.exports = expressConfig
