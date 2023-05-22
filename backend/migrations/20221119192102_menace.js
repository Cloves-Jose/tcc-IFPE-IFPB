/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('menace', table => {
        table.increments('id'),
        table.string('name').notNull(),
        table.string('photo').notNull(),
        table.string('zone').nullable(),
        table.string('dangerousness').nullable(),
        table.string('street').notNull(),
        table.string('neighborhood').notNull(),
        table.string('risk').nullable(),
        table.string('description').notNull(),
        table.string('created_at').notNull()
        table.string('updated_at').nullable(),
        table.string('deleted_at').nullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('menace')
};
