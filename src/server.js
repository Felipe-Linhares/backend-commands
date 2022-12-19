// * Imports
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// * Environment
dotenv.config()

// * Routes
const routes = require('./routes.js')

// * APP
const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

// * PORT
app.listen(process.env.PORT)

// * Start Message
console.log('- Environment:', process.env.NODE_ENV)
console.log('- Server Rugging on PORT:', process.env.PORT)
