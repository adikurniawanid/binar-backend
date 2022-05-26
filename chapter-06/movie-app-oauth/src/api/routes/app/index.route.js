const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ message: "movie-app-oauth" });
});

module.exports = router;
