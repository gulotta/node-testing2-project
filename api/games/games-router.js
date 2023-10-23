const express = require('express')
const router = express.Router()
const Game = require('./games-model')


router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deleteGame = await Game.deleteGame(id)
    res.status(200).json(deleteGame)
})



module.exports = router