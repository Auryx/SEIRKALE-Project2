const {Schema, model} = require('./connection')

const landSchema = new Schema({
    name: String,
    type_line: String,
    artist_info: String,
    img_link: String
})

const Land = model('land', landSchema)

module.exports = Land