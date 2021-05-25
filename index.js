const express = require('express')
const app = express()
const pokemonRouter = require('./routes/pokemonRouter')

app.get('/', (req, res) => {
    res.send('Welcome to Pokedex Api')
})

app.listen(3000, console.log('Server is running on 3000'))