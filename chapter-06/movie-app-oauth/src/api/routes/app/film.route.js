const express = require("express");
const router = express.Router();

const { FilmController } = require("../../controllers/app");

router.get("/", FilmController.list);

module.exports = router;
