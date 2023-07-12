require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require("method-override")
const session = require('express-session')
const MongoStore = require('connect-mongo')
const CardRouter = require('./controllers/card')
const UserRouter = require('./controllers/user')

// These go last
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(morgan('tiny')); //logging
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(express.urlencoded({extended: false }))

app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true, 
    resave: false,
}));

// IMPORTED CONTROLLER(S)
app.use('/card', CardRouter)
app.use('/user', UserRouter)

// Controllers
app.get('/', (req, res) => {
    res.render('landing/landing.ejs')
})

//Listener
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT} for Project 2`)
})