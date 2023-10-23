const request = require('supertest')
const db = require('../../data/db-config')
const server = require('../server')

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


test ("correct ENV variable", () => {
    expect(process.env.DB_ENV).toBe("testing")
})



