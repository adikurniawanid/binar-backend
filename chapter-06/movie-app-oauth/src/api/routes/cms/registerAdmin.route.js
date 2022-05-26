const express = require("express");
const router = express.Router();
const { AdminController } = require("../../controllers/cms");
const { authorization, isSuperAdmin } = require("../../middlewares");

router.use(authorization);
router.use(isSuperAdmin);
router.post("/", AdminController.add);

module.exports = router;
