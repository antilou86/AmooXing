const router = require("express").Router();
const model = require("../models/fish");
const m = {
  //middleware
  encrypt: require("../middleware/encrypt"),
  validate: require("../middleware/validate"),
};

//add a fish
router.post(
    `/fish/add`, 
    m.validate.token, 
    m.validate.admin, 
    async (req, res) => {
      if (!req.body) {
        return res
        .status(400)
        .json({message: "Please provide fish details."});
    }
    const new_fish = {
        fish_name: req.body.fish_name,
        northern_season: req.body.northern_season,
        northern_availability: req.body.northern_availability,
        southern_season: req.body.southern_season,
        southern_availability: req.body.southern_availability,
        location: req.body.location,
        sell_price: req.body.sell_price,
        image_url: req.body.image_url
      };
    try {
      const fish = await model.add_one(new_fish);
      res.status(200).json({
        message: `SUCCESS: FISH ADDED`,
        user: fish,
      });
    } catch (err) {
      if (
        typeof err.detail === "string" &&
        err.detail.match(/(\(fish\)).*(already exists)/i)
      ) {
        return res.status(400).json({message: "That fish already exists."});
      }
      console.log("err", err);
      res.status(500).json(err.detail);
    }
  });
  
  //get one fish
  router.get(
    `/fish/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      try {
        const fish = await model.get_by_id(id);
        fish
          ? res.status(200).json(fish)
          : res.status(404).json("No fish found.");
      } catch (err) {
        console.log(err);
        res.status(500).json(err.detail);
      }
    },
  );

  //get all fish
  router.get(`/fish`, m.validate.token, async (req, res) => {
    console.log(req.fish);
    try {
      const fish = await model.get_all();
      fish.length > 0
        ? res.status(200).json(fish)
        : res.status(404).json("No fish found.");
    } catch (err) {
      res.status(500).json(err.detail);
    }
  });
  
  //update a user
  router.put(
    `/fish/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      const updates = req.body;
      try {
        const fish = await model.update_one(id, updates);
        fish
          ? res.status(200).json(fish)
          : res.status(404).json(`Couldn't update fish`);
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  //terminate a fish
  router.delete(
    `/fish/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      try {
        const fish = await model.remove_one(id);
        fish
          ? res.status(200).json(`${fish.fish_name} has been terminated.`)
          : res.status(404).json(`Couldn't find fish by ${id}.`);
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  //terminate all fish
  router.delete(
    `/fish`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      try {
        await model.remove_all();
        res.status(200).json("All fish have been eliminated.");
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  module.exports = router;