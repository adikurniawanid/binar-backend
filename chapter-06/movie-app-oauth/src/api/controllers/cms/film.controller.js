const { addFilm } = require("../../services");

class FilmController {
  static async add(req, res, next) {
    try {
      await addFilm(req.body.name);
      res.status(200).json({
        message: "Success add film",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FilmController;
