const express = require("express");
const router = express.Router();
const { LoginController } = require("../controllers");

router.post("/", LoginController.login);
router.post("/google", LoginController.loginWithGoogle);

module.exports = router;
