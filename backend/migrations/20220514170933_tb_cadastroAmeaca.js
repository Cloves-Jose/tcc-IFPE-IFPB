
exports.up = function(knex) {
    return knex.schema.createTable('tb_cadastroAmeaca', table => {
        table.increments('id').primary()
        table.string('tipo_ameaca').notNull()
        table.string('idade', 3).notNull()
        table.enu('genero', ['masculino', 'feminino', 'nao_binario']).notNull()
        table.enu('reside_ameaca', ['true', 'false']).notNull()
        table.string('descricao', 200)
        table.string('url_imagem')
        table.string('latitude').notNull()
        table.string('longitude').notNull()
        table.string('registeredAt').notNull()
        table.date('deletedAt')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_cadastroAmeaca')
};
