const express = require("express");
const router = express.Router();

const { FilmController } = require("../../controllers/cms");
const { authorization, isAdminSuperAdmin } = require("../../middlewares");

router.use(authorization);
router.use(isAdminSuperAdmin);
router.post("/", FilmController.add);

module.exports = router;
