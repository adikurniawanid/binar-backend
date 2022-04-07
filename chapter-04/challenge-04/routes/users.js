const express = require("express");
const router = express.Router();
const {
  getUserList,
  getUserDetailById,
  addUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.get("/", getUserList);
router.get("/:id", getUserDetailById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
