const express = require("express");
const router = express.Router();
const { authorization } = require("../../middlewares");

const { WishlistController } = require("../../controllers/app");

router.use(authorization);
router.get("/", WishlistController.list);
router.post("/", WishlistController.add);
router.delete("/:id", WishlistController.delete);

module.exports = router;
