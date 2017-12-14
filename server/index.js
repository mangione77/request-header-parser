require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT 

app.use('/', routes)

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${PORT}`)
})