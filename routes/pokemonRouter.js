const express = require("express")
const jsonData = require('../pokedex.json')
const pokemonRouter = express.Router()

pokemonRouter.get('/pokemon', (req, res) => {
    res.send('pokemon')
})




module.exports = pokemonRouter