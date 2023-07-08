const express = require('express')
const Card = require('../models/card')

const router = express.Router()

// INDEX
router.get('/', async (req, res) => {
    const allCards = await Card.find()
    console.log(allCards)
    res.render('./card/index.ejs', {cards: allCards, })
})

module.exports = router