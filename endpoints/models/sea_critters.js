const db = require("../../data/dbconfig");

add_one = async obj => {
    return await db.transaction(async trx => {
      try {
        const return_sea_critter = await trx("sea_critters")
          .insert(obj)
          .returning("*");
        const sea_critter_entry = {
          sea_critter_id: return_sea_critter[0].id,
          sea_critter_name: return_sea_critter[0].critter_name,
          northern_season: return_sea_critter[0].northern_season,
          northern_availability: return_sea_critter[0].northern_availability,
          southern_season: return_sea_critter[0].southern_season,
          southern_availability: return_sea_critter[0].southern_availability,
          location: return_sea_critter[0].location,
          sell_price: return_sea_critter[0].sell_price,
          image_url: return_sea_critter[0].image_url
        };
        await trx("sea_critters").insert(sea_critter_entry);
        return return_sea_critter[0];
      } catch (err) {
        throw err;
      }
    });
  };

get_by_id = id =>
  db("sea_critters")
    .where("sea_critters.id", id)
    .select("*")
    .groupBy("sea_critters.id", "sea_critters.critter_name")
    .first();

get_one = async search_params =>
    await db("sea_critters")
      .where(search_params)
      .select("*")
      .groupBy("sea_critters.id", "sea_critters.critter_name")
      .first();

get_all = async (search_params = {}) => await db("sea_critters").where(search_params).orderBy('sell_price', 'desc');

update_one = async (id, obj) =>
  (
    await db("sea_critters")
      .where({id})
      .update(obj)
      .returning("*")
  )[0];

remove_one = async id =>
  (
    await db("sea_critters")
      .where({id})
      .delete()
      .returning("*")
  )[0];

remove_all = async () => await db("sea_critters").delete();

get_all_fish_sea_critters_and_bugs = async () => await db("sea_critters")
  .select(
    "sea_critters.id",
    "sea_critters.critter_name as name",
    "sea_critters.northern_season",
    "sea_critters.northern_availability",
    "sea_critters.southern_season",
    "sea_critters.southern_availability",
    "sea_critters.location",
    "sea_critters.sell_price",
    "sea_critters.image_url",
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