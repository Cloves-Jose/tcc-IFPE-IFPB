
exports.up = function(knex) {
    return knex.schema.createTable('tb_usuario', table => {
        table.increments('id').primary()
        table.string('matricula').notNull()
        table.string('nome').notNull()
        table.string('senha', 64).notNull()
        table.enu('administrador', ['true', 'false']).notNull()
        table.date('registeredAt').notNull()
        table.date('updatedAt')
        table.date('deletedAt')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_usuario')
};
