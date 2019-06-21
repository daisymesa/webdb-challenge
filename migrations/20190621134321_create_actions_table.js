
exports.up = function (knex) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl
            .increments();
        tbl
            .string('description', 128)
            .notNullable()
        tbl
            .string('notes', 128)
            .notNullable()
        tbl
            .boolean('completed')
            .defaultTo(false)
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('actions');
};
