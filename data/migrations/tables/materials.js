module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("material_name", 24)
      .unique()
      .notNullable();
    tbl.text("how_to_get");
    tbl.integer("selling_price");
    tbl.text("image_url");
  };