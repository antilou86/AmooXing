const router = require("express").Router();
const model = require("../models/bugs");
const m = {
  //middleware
  encrypt: require("../middleware/encrypt"),
  validate: require("../middleware/validate"),
};

//add a bug
router.post(
    `/bugs/add`, 
    m.validate.token, 
    m.validate.admin, 
    async (req, res) => {
      if (!req.body || !req.body.username.length || !req.body.password.length) {
        return res
        .status(400)
        .json({message: "Please provide a username and password."});
    }
    const new_bug = {
        bug_name: req.body.bug_name,
        northern_season: req.body.northern_season,
        northern_availability: req.body.northern_availability,
        southern_season: req.body.southern_season,
        southern_availability: req.body.southern_availability,
        location: req.body.location,
        sell_price: req.body.sell_price,
        image_url: req.body.image_url
      };
    try {
      const bug = await model.add_one(new_bug);
      res.status(200).json({
        message: `SUCCESS: BUG ADDED`,
        user: bug,
      });
    } catch (err) {
      if (
        typeof err.detail === "string" &&
        err.detail.match(/(\(bug\)).*(already exists)/i)
      ) {
        return res.status(400).json({message: "That bug already exists."});
      }
      console.log("err", err);
      res.status(500).json(err.detail);
    }
  });
  
  //get one bug
  router.get(
    `/bugs/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      try {
        const bug = await model.get_by_id(id);
        bug
          ? res.status(200).json(bug)
          : res.status(404).json("No bug found.");
      } catch (err) {
        console.log(err);
        res.status(500).json(err.detail);
      }
    },
  );

  //get all bugs
  router.get(`/bugs`, m.validate.token, async (req, res) => {
    console.log(req.bugs);
    try {
      const bugs = await model.get_all();
      bugs.length > 0
        ? res.status(200).json(bugs)
        : res.status(404).json("No bugs found.");
    } catch (err) {
      res.status(500).json(err.detail);
    }
  });
  
  //update a user
  router.put(
    `/bugs/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      const updates = req.body;
      try {
        const bug = await model.update_one(id, updates);
        bug
          ? res.status(200).json(bug)
          : res.status(404).json(`Couldn't update bug`);
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  //terminate a bugs
  router.delete(
    `/bugs/:id`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      const {id} = req.params;
      try {
        const bug = await model.remove_one(id);
        bug
          ? res.status(200).json(`${bug.bug_name} has been terminated.`)
          : res.status(404).json(`Couldn't find bug by ${id}.`);
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  //terminate all bugs
  router.delete(
    `/bugs`,
    m.validate.token,
    m.validate.admin,
    async (req, res) => {
      try {
        await model.remove_all();
        res.status(200).json("All bugs have been eliminated.");
      } catch (err) {
        res.status(500).json(err.detail);
      }
    },
  );
  
  module.exports = router;