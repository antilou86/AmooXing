module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("villager_name", 24)
      .unique()
      .notNullable();
    tbl.text("birthday");
    tbl.text("personality");
    tbl.text("image_url");
  };