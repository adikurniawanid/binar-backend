const { addUser } = require("../../services");

class UserController {
  static async add(req, res, next) {
    try {
      await addUser(req.body.username, req.body.password);
      res.status(200).json({
        message: "Success add user",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
