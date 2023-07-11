const express = require('express')
const Card = require('../models/card')

const router = express.Router()

// INDEX
router.get('/', async (req, res) => {
    const cards = await Card.find({})
    // console.log(cards)
    res.render('./card/index.ejs', {cards})
})

// NEW 
router.get('/new', (req, res) => {
    res.render('./card/new.ejs')
})

// CREATE
router.post('/', async (req, res) => {
    const newCard = {
        name: req.body.name, 
        type_line: req.body.type_line, 
        expansion_symbol: req.body.expansion_symbol, 
        artist_info: req.body.artist_info, 
        power_toughness: req.body.power_toughness, 
        collectors_number: req.body.collectors_number,
        text_box: {
            abilities: req.body.abilities,
            flavor_text: req.body.flavor_text
        },
        mana_cost: {
            colorless_info: req.body.colorless_info,
            color_identity: req.body.colors_identity
    }
    }

    console.log(newCard)
    await Card.create(newCard)
    res.redirect('/card')
})

// DESTROY
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await Card.findByIdAndDelete(id)
    res.redirect('/card')
})

// EDIT
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id
    const card = await Card.findById(id)
    res.render('./card/edit.ejs', {card, id})
})

// UPDATE
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const editCard = {
        name: req.body.name, 
        type_line: req.body.type_line, 
        expansion_symbol: req.body.expansion_symbol, 
        artist_info: req.body.artist_info, 
        power_toughness: req.body.power_toughness, 
        collectors_number: req.body.collectors_number,
        text_box: {
            abilities: req.body.abilities,
            flavor_text: req.body.flavor_text
        },
        mana_cost: {
            colorless_info: req.body.colorless_info,
            color_identity: req.body.colors_identity
    }
    }
    // console.log(editCard)
    await Card.findByIdAndUpdate(id, editCard)
    res.redirect('/card')
})

// SHOW // THIS GOES AT THE BOTTOM OF THE GETS
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const card = await Card.findById(id)
    console.log(id, card)
    res.render('./card/show.ejs', {card, id})
})

module.exports = router