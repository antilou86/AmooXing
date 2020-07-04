const db = require("../../data/dbconfig");

add_one = async obj => {
    return await db.transaction(async trx => {
      try {
        const return_sea_critter = await trx("sea_critters")
          .insert(obj)
          .returning("*");
        const sea_critter_entry = {
          sea_critter_id: return_sea_critter[0].id,
          sea_critter_name: return_sea_critter[0].sea_critter_name,
          northern_season: return_sea_critter[0].northern_season,
          northern_availability: return_sea_critter[0].northern_availability,
          southern_season: return_sea_critter[0].southern_season,
          southern_availability: return_sea_critter[0].southern_availability,
          location: return_sea_critter[0].location,
          sell_price: return_sea_critter[0].sell_price,
          image_url: return_sea_critter[0].image_url
        };
        await trx("sea_critter").insert(sea_critter_entry);
        return return_sea_critter[0];
      } catch (err) {
        throw err;
      }
    });
  };

get_by_id = id =>
  db("sea_critter")
    .where("sea_critter.id", id)
    .select("*")
    .groupBy("sea_critter.id", "sea_critter.sea_critter_name")
    .first();

get_one = async search_params =>
    await db("sea_critter")
      .where(search_params)
      .select("*")
      .groupBy("sea_critter.id", "sea_critter.sea_critter_name")
      .first();

get_all = async (search_params = {}) => await db("sea_critter").where(search_params).orderBy('sell_price', 'desc');

update_one = async (id, obj) =>
  (
    await db("sea_critter")
      .where({id})
      .update(obj)
      .returning("*")
  )[0];

remove_one = async id =>
  (
    await db("sea_critter")
      .where({id})
      .delete()
      .returning("*")
  )[0];

remove_all = async () => await db("sea_critter").delete();

get_all_fish_sea_critters_and_bugs = async () => await db("sea_critter")
  .select(
    "sea_critter.id",
    "sea_critter.sea_critter_name as name",
    "sea_critter.northern_season",
    "sea_critter.northern_availability",
    "sea_critter.southern_season",
    "sea_critter.southern_availability",
    "sea_critter.location",
    "sea_critter.sell_price",
    "sea_critter.image_url",
    )
  .union(db.raw('SELECT id, bug_name as name, northern_season, northern_availability, southern_season, southern_availability, "location", sell_price, image_url FROM bugs'),
           db.raw('SELECT id, fish_name as name, northern_season, northern_availability, southern_season, southern_availability, "location", sell_price, image_url FROM fish')
    )
  .orderBy("sell_price", "desc")

module.exports = {
  add_one,
  get_one,
  get_by_id,
  get_all,
  update_one,
  remove_one,
  remove_all,
  get_all_fish_sea_critters_and_bugs,
};