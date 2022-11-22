/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('register_menace', table => {
        table.increments('id'),
        table.string('age').notNull(),
        table.string('sex').notNull(),
        table.boolean('reside_menace').notNull(),
        table.string('description').nullable(),
        table.string('image').nullable(),
        table.string('latitude').notNull(),
        table.string('longitude').notNull(),
        table.integer('menace_id').unsigned().unique().references('menace.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('register_menace')
};
