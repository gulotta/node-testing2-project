const express = require('express')
const router = express.Router()
const Game = require('./games-model')


router.get('/', async (req, res, next) => {
   try {
    const games = await Game.getAll()
    res.json(games)
} catch (err) {
    next(err)
}
})

router.use((err, req, res, next) => { //eslint-disable-line
res.status(err.status || 500).json({
    message: err.message,
})
})

module.exports = router