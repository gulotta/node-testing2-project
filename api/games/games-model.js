const db = require('../../data/db-config')


function getAll(){
    return db('games')
}
function getById(id){
    return db('games').where('id', id).first()
}
async function insert(game){
    return await db('games').insert(game).then(([id]) => {
        return db('games').where('id', id).first()
    })

}
async function update(id, changes){
    await db('games').where({id}).update(changes)
    return db('games').where({id}).first()

}
function remove(id){
    return db('games').where({id}).delete()

}



module.exports = {
    insert,
    update,
    remove,
    getAll,
    getById,
}