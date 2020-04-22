module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("tree_name", 24)
      .unique()
      .notNullable();
    tbl.text("image_url");
    tbl.text("non_native_selling_price");
  };