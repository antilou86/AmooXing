
exports.up = function(knex) {
    return knex.schema.createTable('trees', tbl => {
        tbl.increments("id");
        tbl
          .text("tree_name", 24)
          .unique()
          .notNullable();
        tbl.text("image_url");
        tbl.text("non_native_selling_price");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('trees');
};
