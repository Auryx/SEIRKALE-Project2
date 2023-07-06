require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require("method-override")
const session = require('express-session')
const MongoStore = require('connect-mongo')
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("Welcome to Project 2")
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT} for Project 2`)
})