const db = require('../../data/db-config')


async function createGame(game){
    const [id] = await db("games").insert(game)
    return db("games").where("game_id", id).first()
}

async function deleteGame(id){
    const game = await db('games').where("game_id", id).first()
    await db('games').where("game_id", id).delete()
    return game
}




module.exports = {
   createGame,
   deleteGame
}