const { addAdmin } = require("../../services");

class AdminController {
  static async add(req, res, next) {
    try {
      await addAdmin(req.body.username, req.body.password);
      res.status(200).json({
        message: "Success add admin",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdminController;
