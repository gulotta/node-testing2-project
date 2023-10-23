const games = [

{title: 'Skyrim', description: 'Bethesda RPG'},
{title: 'Halo', description: 'Bungie FPS'},
{title: 'Red Dead Redemption', description: 'Rockstar RPG'},
{title: 'Stardew Valley', description: 'BoredApe Casual Sim'},
{title: 'Cities Skylines', description: 'Paradox City Sim'},

]

exports.games = games

exports.seed = function (knex, Promise) {
    return knex('games').truncate()
    .then(function () {
        return knex('games').insert(games)
    })
}