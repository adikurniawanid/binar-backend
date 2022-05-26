const { body } = require("express-validator");
const { isUsernameExists } = require("../services");

const addUserValidationRules = () => {
  return [
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 5, max: 21 })
      .withMessage("Username must be between 5 and 21 characters")
      .custom(async (value) => {
        if (await isUsernameExists(value)) {
          return Promise.reject("Username already in use");
        }
      }),
    body("password").notEmpty().withMessage("Password is required"),
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ max: 255 })
      .withMessage("name must be less than 255 characters"),
    body("age").optional().isNumeric().withMessage("age must be number"),
  ];
};

module.exports = {
  addUserValidationRules,
};
