const db = require("../../data/dbconfig");

add_one = async obj => {
    return await db.transaction(async trx => {
      try {
        const return_villager = await trx("villagers")
          .insert(obj)
          .returning("*");
        const villager_entry = {
            villager_id: return_villager[0].id,
            villager_name: return_villager[0].villager_name, 
            birthday:return_villager[0].birthday, 
            personality: return_villager[0].personality, 
            image_url: return_villager[0].image_url
        };
        await trx("villagers").insert(villager_entry);
        return return_villager[0];
      } catch (err) {
        throw err;
      }
    });
  };

get_by_id = id =>
  db("villagers")
    .where("villagers.id", id)
    .select("*")
    .groupBy("villagers.id", "villagers.villager_name")
    .first();

get_one = async search_params =>
    await db("villagers")
      .where(search_params)
      .select("*")
      .groupBy("villagers.id", "villagers.villager_name")
      .first();

get_all = async (search_params = {}) => await db("villagers").where(search_params)

update_one = async (id, obj) =>
  (
    await db("villagers")
      .where({id})
      .update(obj)
      .returning("*")
  )[0];

remove_one = async id =>
  (
    await db("villagers")
      .where({id})
      .delete()
      .returning("*")
  )[0];

remove_all = async () => await db("villagers").delete();

module.exports = {
  add_one,
  get_one,
  get_by_id,
  get_all,
  update_one,
  remove_one,
  remove_all,
};