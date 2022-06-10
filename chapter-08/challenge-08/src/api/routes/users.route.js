const express = require("express");
const router = express.Router();

const { UserController } = require("../controllers");
const { validate } = require("../middlewares");
const {
  addUserValidationRules,
  updateUserValidationRules,
} = require("../validations/user.validation");

const multer = require("multer");
const { storage } = require("../helpers");

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 300,
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(mp4|avi|mov|mkv)$/)) {
      return cb(new Error("Please upload a video file"));
    }
    cb(null, true);
  },
});

router.get("/", UserController.list);
router.get("/:id", UserController.get);
router.post(
  "/",
  upload.single("video"),
  addUserValidationRules(),
  validate,
  UserController.add
);
router.put(
  "/:id",
  updateUserValidationRules(),
  validate,
  UserController.update
);
router.delete("/:id", UserController.delete);
router.post("/send-forgot-password-token", UserController.sendForgotPasswordToken);
router.post("/verify-forgot-password-token", UserController.verifyForgotPasswordToken);
router.post("/change-password", UserController.changePassword);

module.exports = router;
