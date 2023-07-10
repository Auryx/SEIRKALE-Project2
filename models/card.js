const {Schema, model} = require('./connection')

const cardSchema = new Schema({
    name: String,
    type_line: String,
    expansion_symbol: String,
    artist_info: String,
    power_toughness: String,
    collectors_number: String,
    text_box: {
        abilities: String,
        flavor_text: String
    },
    mana_cost: [
        {colorless_info: String},
        {colors_identity: String}
    ]
})

const Card = model('card', cardSchema)

module.exports = Card