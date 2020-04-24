
exports.up = function(knex) {
    return knex.schema.createTable('user_roles', tbl => {
        tbl.increments("id");
        tbl
          .integer("user_id")
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE")
          .notNullable();
        tbl
          .integer("role_id")
          .references("id")
          .inTable("user_roles")
          .onUpdate("CASCADE")
          .onDelete("CASCADE")
          .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_roles');
};
