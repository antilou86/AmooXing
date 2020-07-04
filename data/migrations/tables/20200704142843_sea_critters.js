
exports.up = function(knex) {
    return knex.schema.createTable('sea_critters',tbl => {
        tbl.increments("id");
        tbl
          .text("critter_name", 24)
          .unique()
          .notNullable();
        tbl.text("northern_season");
        tbl.text("northern_availability");
        tbl.text("southern_season");
        tbl.text("southern_availability");
        tbl.text("location");
        tbl.integer("sell_price");
        tbl.text("image_url");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sea_critters');
};