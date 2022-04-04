const express = require("express");
const router = express.Router();
const fs = require("fs");
const { loadData } = require("../controllers/MovieController");

const USER_PATH = "./data/user.json";

/* GET home page. */
router.get("/", (req, res, next) => {
  res.redirect("/movies");
});

router.post("/login", function (req, res, next) {
  const users = loadData(USER_PATH);
  let selectedUser;

  for (let index = 0; index < users.length; index++) {
    if (
      users[index].name === req.body.name &&
      users[index].password === req.body.password
    ) {
      selectedUser = users[index];
    }
  }
  res.status(200).json(`${selectedUser.id}:${selectedUser.name}`);
});

module.exports = router;
