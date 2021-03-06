
exports.up = function(knex) {
    return knex.schema.createTable('DIYs', tbl => {
        tbl.increments("id");
        tbl
          .text("DIY_name", 24)
          .unique()
          .notNullable();
        tbl.text("how_to_get");
        tbl.text("ingredients");
        tbl.integer("sell_price");
        tbl.text("image_url");
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('DIYs');
};
