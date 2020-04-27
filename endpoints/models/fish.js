const db = require("../../data/dbconfig");

add_one = async obj => {
    return await db.transaction(async trx => {
      try {
        const return_fish = await trx("fish")
          .insert(obj)
          .returning("*");
        const fish_entry = {
          fish_id: return_fish[0].id,
          fish_name: return_fish[0].fish_name,
          northern_season: return_fish[0].northern_season,
          northern_availability: return_fish[0].northern_availability,
          southern_season: return_fish[0].southern_season,
          southern_availability: return_fish[0].southern_availability,
          location: return_fish[0].location,
          sell_price: return_fish[0].sell_price,
          image_url: return_fish[0].image_url
        };
        await trx("fish").insert(fish_entry);
        return return_fish[0];
      } catch (err) {
        throw err;
      }
    });
  };

get_by_id = id =>
  db("fish")
    .where("fish.id", id)
    .select("*")
    .groupBy("fish.id", "fish.fish_name")
    .first();

get_one = async search_params =>
    await db("fish")
      .where(search_params)
      .select("*")
      .groupBy("fish.id", "fish.fish_name")
      .first();

get_all = async (search_params = {}) => await db("fish").where(search_params);

update_one = async (id, obj) =>
  (
    await db("fish")
      .where({id})
      .update(obj)
      .returning("*")
  )[0];

remove_one = async id =>
  (
    await db("fish")
      .where({id})
      .delete()
      .returning("*")
  )[0];

remove_all = async () => await db("fish").delete();

module.exports = {
  add_one,
  get_one,
  get_by_id,
  get_all,
  update_one,
  remove_one,
  remove_all,
};