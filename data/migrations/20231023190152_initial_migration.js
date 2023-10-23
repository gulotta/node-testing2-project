exports.up = function(knex) {
    return knex.schema
    .createTable('games', tbl => {
        tbl.increments('game_id')
        tbl.text('title').notNullable()
        tbl.text('description').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games')
};
