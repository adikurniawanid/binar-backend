const express = require("express");
const router = express.Router();
const { LoginAdminController } = require("../../controllers/cms");

router.post("/", LoginAdminController.login);

module.exports = router;
