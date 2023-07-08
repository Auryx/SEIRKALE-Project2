require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require("method-override")
const session = require('express-session')
const MongoStore = require('connect-mongo')
const CardRouter = require('./controllers/card')

// These go last
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(morgan('tiny')); //logging
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(express.urlencoded())

// IMPORTED CONTROLLER(S)
app.use('/card', CardRouter)

// Controllers
app.get('/', (req, res) => {
    res.send('Welcome to the internet, what do you require?')
})

//Listener
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT} for Project 2`)
})