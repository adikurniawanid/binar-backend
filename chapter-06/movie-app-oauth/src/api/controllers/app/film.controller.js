const { getFilmList } = require("../../services");

class FilmController {
  static async list(req, res, next) {
    try {
      res.status(200).json({
        data: await getFilmList(),
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FilmController;
