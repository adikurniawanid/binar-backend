const { Wishlist } = require("../models");

const addWishlist = async (UserIdParam, FilmIdParam) => {
  await Wishlist.create({
    UserId: UserIdParam,
    FilmId: FilmIdParam,
  });
};

module.exports = { addWishlist };
