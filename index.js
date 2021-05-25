const express = require('express')   //npm i express
const app = express()
const cors = require('cors')   //npm i cors
const pokemonRouter = require('./routes/pokemonRouter')
app.use(cors())  

app.get('/', (req, res) => {
    res.send('Welcome to Pokedex Api')
})

app.use('/', pokemonRouter)

app.listen(3000, console.log('Server is running on 3000'))