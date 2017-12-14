const express = require('express')
const routes = express()

const requestHeaderController = require('./controllers/requestHeaderController')

routes.get("/", requestHeaderController.getData)

module.exports = routes