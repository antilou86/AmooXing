const db = require("../../data/dbconfig");

add_one = async obj => {
    return await db.transaction(async trx => {
      try {
        const return_bug = await trx("bugs")
          .insert(obj)
          .returning("*");
        const bugs_entry = {
          bug_id: return_bug[0].id,
          bug_name: return_bug[0].bug_name,
          northern_season: return_bug[0].northern_season,
          northern_availability: return_bug[0].northern_availability,
          southern_season: return_bug[0].southern_season,
          southern_availability: return_bug[0].southern_availability,
          location: return_bug[0].location,
          sell_price: return_bug[0].sell_price,
          image_url: return_bug[0].image_url
        };
        await trx("bugs").insert(bugs_entry);
        return return_bug[0];
      } catch (err) {
        throw err;
      }
    });
  };

get_by_id = id =>
  db("bugs")
    .where("bugs.id", id)
    .select("*")
    .groupBy("bugs.id", "bugs.bug_name")
    .first();

get_one = async search_params =>
    await db("bugs")
      .where(search_params)
      .select("*")
      .groupBy("bugs.id", "bugs.bug_name")
      .first();

get_all = async (search_params = {}) => await db("bugs").where(search_params);

update_one = async (id, obj) =>
  (
    await db("bugs")
      .where({id})
      .update(obj)
      .returning("*")
  )[0];

remove_one = async id =>
  (
    await db("bugs")
      .where({id})
      .delete()
      .returning("*")
  )[0];

remove_all = async () => await db("bugs").delete();

module.exports = {
  add_one,
  get_one,
  get_by_id,
  get_all,
  update_one,
  remove_one,
  remove_all,
};