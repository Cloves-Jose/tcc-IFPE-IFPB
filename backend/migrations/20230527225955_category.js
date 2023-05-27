/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('category', table => {
        table.increments('id')
        table.string('title').notNull(),
        table.string('created_at').notNull(),
        table.string('updated_at').nullable(),
        table.string('deleted_at').nullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('category')
};
