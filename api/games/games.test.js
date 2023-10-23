const request = require('supertest')
const db = require('../../data/db-config')
const server = require('../server')
const Game = require('./games-model')

const game1 = {
    title: "GTA", 
    description: "Rockstar Open World RPG",
}
const game2 = {
    title: "Links Awakening", 
    description:"Nintendo fantasy adventure game",
}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('games').truncate()
})

afterAll (async () => {
    await db.destroy()
})

test ("correct ENV variable", () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe('Games model functions', () => {
    describe("create game", () => {
        test("add game to db", async () => {
            let games = await Game.createGame(game1)
            games = await db('games')
            expect(games).toHaveLength(1)

            await Game.createGame(game2)
            games = await db('games')
            expect(games).toHaveLength(2)
        })
        test("insert game title and description", async () => {
            const game = await Game.createGame(game1)
            expect(game).toMatchObject({game_id:1, ...game})
    })
    })
    describe("[DELETE] / - delete Game", () => {
        test("removes game from db", async () => {
            const [game_id] = await db("games").insert(game1)
            let game = await db("games").where({game_id}).first()
            expect(game).toBeTruthy()
            await request(server).delete("/games/"+ game_id)
            game = await db("games").where({game_id}).first()
            expect(game).toBeFalsy()
        })
        test("respond with deleted game", async () => {
            await db("games").insert(game1)
            let game = await request(server).delete("/games/1")
            expect(game.body).toMatchObject(game1)
        })
    })
})




