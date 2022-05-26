const {
  getWishlist,
  addWishlist,
  deleteWishlist,
  getWishlistById,
} = require("../../services");

class WishlistController {
  static async list(req, res, next) {
    try {
      res.status(200).json({
        data: await getWishlist(req.user.id),
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      await addWishlist(req.user.id, req.body.filmId);
      res.status(200).json({
        message: "Success add wishlist",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const wishlist = await getWishlistById(req.params.id);

      if (wishlist) {
        await deleteWishlist(req.params.id);
        res.status(200).json({
          message: "Success delete wishlist",
        });
      } else {
        throw {
          status: 404,
          message: "Wishlist not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = WishlistController;
