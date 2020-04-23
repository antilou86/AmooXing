
exports.up = function(knex, promise) {
  return knex.schema.createTable('bugs', tbl => {
    tbl.increments("id");
    tbl
      .text("bug_name", 24)
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
    return knex.schema.dropTableIfExists('bugs');
};
