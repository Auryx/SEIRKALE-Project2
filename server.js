require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require("method-override")
const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(morgan('tiny')); //logging
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(express.urlencoded())

// IMPORTED CONTROLLER(S)


// Controllers
app.get('/', (req, res) => {
    res.send("Welcome to Project 2")
})

//Listener
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT} for Project 2`)
})