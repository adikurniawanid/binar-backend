const express = require("express");
const router = express.Router();
const { UserController } = require("../../controllers/app");

router.post("/", UserController.add);

module.exports = router;
