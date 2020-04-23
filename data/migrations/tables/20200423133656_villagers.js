
exports.up = function(knex, Promise) {
    return knex.schema.createTable('villagers', tbl => {
        tbl.increments("id");
        tbl
          .text("villager_name", 24)
          .unique()
          .notNullable();
        tbl.text("birthday");
        tbl.text("personality");
        tbl.text("image_url");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('villagers');
};
