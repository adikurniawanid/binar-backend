const {
  indexRouter,
  filmRouter,
  registerRouter,
  wishlistRouter,
  loginRouter,
} = require("./app");

const {
  loginAdminRouter,
  registerAdminRouter,
  filmAdminRouter,
} = require("./cms");

const express = require("express");
const router = express.Router();

router.use("/", indexRouter);
router.use("/film", filmRouter);
router.use("/register", registerRouter);
router.use("/wishlist", wishlistRouter);
router.use("/login", loginRouter);
router.use("/admin/login", loginAdminRouter);
router.use("/admin/register", registerAdminRouter);
router.use("/admin/film", filmAdminRouter);

module.exports = router;
