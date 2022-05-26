const express = require("express");
const router = express.Router();

const { UserController } = require("../controllers");
const { validate } = require("../middlewares");
const {
  addUserValidationRules,
  updateUserValidationRules,
} = require("../validations/user.validation");

router.get("/", UserController.list);
router.get("/:id", UserController.get);
router.post("/", addUserValidationRules(), validate, UserController.add);
router.put(
  "/:id",
  updateUserValidationRules(),
  validate,
  UserController.update
);
router.delete("/:id", UserController.delete);

module.exports = router;
