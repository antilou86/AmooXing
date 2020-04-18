module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("fish_name", 24)
      .unique()
      .notNullable();
    tbl.text("season").notNullable();
    tbl.text("availability");
    tbl.text("location");
    tbl.text("hemisphere");
    tbl.text("sell_price");
    tbl.text("image_url");
  };

