const express = require('express')
const server = express()
const gamesRouter = require("./games/games-router")

server.use(express.json())
server.use('/games', gamesRouter)

module.exports = server;