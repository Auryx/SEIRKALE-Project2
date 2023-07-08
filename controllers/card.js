const express = require('express')
const Card = require('../models/card')

const router = express.Router()

// INDEX
router.get('/', async (req, res) => {
    const allCards = await Card.find()
    console.log(allCards)
    res.render('./card/index.ejs', {cards: allCards, })
})


// SHOW // THIS GOES AT THE BOTTOM OF THE GETS
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const card = await Card.findById(id)
    res.render('./card/show.ejs', {card})
})

module.exports = router