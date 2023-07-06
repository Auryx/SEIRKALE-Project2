//imports
require('dotenv').config()
const mongoose = require('mongoose')

// get DB url
const DATABASE_URL = process.env.DATABASE_URL

//connect to MongoDB
mongoose.connect(DATABASE_URL)

//connection events
mongoose.connection
    .on("open", () => console.log("Connected to Mongo"))
    .on("close", () => console.log("Disconnected to Mongo"))
    .on("error", (error) => console.log(error))

// export connection

module.exports = mongoose