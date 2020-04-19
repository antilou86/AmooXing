module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("flower_name", 24)
      .notNullable();
    tbl
      .text("color")
      .notNullable();
    tbl.text("image_url");
  };