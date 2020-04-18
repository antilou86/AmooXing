module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("tree_name", 24)
      .unique()
      .notNullable();
    tbl.text("image_url");
  };