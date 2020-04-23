
exports.up = function(knex) {
    return knex.schema.createTable('flowers', tbl => {
        tbl.increments("id");
        tbl
            .text("flower_name", 24)
            .notNullable();
        tbl
            .text("color")
            .notNullable();
        tbl.text("image_url");
        });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('flowers');
};
