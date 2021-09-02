const express = require('express')

const setupRoutes = require('../routes')

const expressConfig = () => {
  const app = express()

  setupRoutes(app)

  app.listen(process.env.PORT, () => {
    console.info(`api running on port ${process.env.PORT}`)
  })
}

module.exports = expressConfig
