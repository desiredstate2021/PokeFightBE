const express = require("express")
const pokedex = require('../pokedex.json')
const pokemonRouter = express.Router()
pokemonRouter.use(express.json())


pokemonRouter.get('/pokemon', (req, res) => {
    res.send(pokedex)
})

pokemonRouter.get('/pokemon/:id', (req, res) => {
    let { id } = req.params
    const pokemon = pokedex.find(e => e.id === parseInt(id))
    res.send(pokemon)
})

pokemonRouter.get('/pokemon/:id/:info', (req, res) => {
    let { id, info } = req.params
    const pokemon = pokedex.find(e => e.id === parseInt(id))
    if (info === 'base') {
        res.send(pokemon.base)
    }
    else if (info === 'type') {
        res.send(pokemon.type)
    }
    else if (info === 'name') {
        res.send(pokemon.name)
    }
    else {
        res.send(pokemon)
    }

})




module.exports = pokemonRouter