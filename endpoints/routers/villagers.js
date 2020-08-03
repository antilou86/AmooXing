const router = require("express").Router();
const model = require("../models/villagers");
const m = {
  //middleware
  encrypt: require("../middleware/encrypt"),
  validate: require("../middleware/validate"),
};

//add a villager
router.post(
    `/villagers/add`, 
    m.validate.token, 
    m.validate.admin, 
    async (req, res) => {
      if (!req.body) {
        return res
        .status(400)
        .json({message: "Please provide villager details."});
    }
    const new_villager = {
        villager_name: req.body.villager_name, 
        birthday: req.body.birthday, 
        personality: req.body.personality, 
        image_url: req.body.image_url
    }
    try {
      const villager = await model.add_one(new_villager);
      res.status(200).json({
        message: `SUCCESS: VILLAGER ADDED`,
        data: villager,
      });
    } catch (err) {
      if (
        typeof err.detail === "string" &&
        err.detail.match(/(\(villager\)).*(already exists)/i)
      ) {
        return res.status(400).json({message: "That villager already exists."});
      }
      console.log("err", err);
      res.status(500).json(err.detail);
    }
  });
  
  //get one villager
  router.get(
    `/villagers/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      try {
        const villager = await model.get_by_id(id);
        villager
          ? res.status(200).json(villager)
          : res.status(404).json("No villager found.");
      } catch (err) {
        console.log(err);
        res.status(500).json(err.detail);
      }
    },
  );

  //get all villagers
  router.get(`/villagers`,  async (req, res) => {
    try {
      const villagers = await model.get_all();
      villagers.length > 0
        ? res.status(200).json(villagers)
        : res.status(404).json("No villagers found.");
    } catch (err) {
      res.status(500).json(err.detail);
    }
  });
  
  //update a villager
  router.put(
    `/villagers/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      const updates = req.body;
      try {
        const bug = await model.update_one(id, updates);
        bug
          ? res.status(200).json(villager)
          : res.status(404).json(`Couldn't update villager`);
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  //terminate a villager
  router.delete(
    `/villagers/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      try {
        const villager = await model.remove_one(id);
        villager
          ? res.status(200).json(`${villager.villager_name} has been terminated.`)
          : res.status(404).json(`Couldn't find villager by id:${id}.`);
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  //terminate all villagers
  router.delete(
    `/villagers`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      try {
        await model.remove_all();
        res.status(200).json("All villagers have been eliminated. Hope you know what you're doing");
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  module.exports = router;