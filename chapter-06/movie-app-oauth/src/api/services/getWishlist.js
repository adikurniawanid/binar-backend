const { Wishlist } = require("../models");

const getWishlist = async (userIdParam) => {
  return await Wishlist.findAll({
    where: {
      UserId: userIdParam,
    },
  });
};

module.exports = { getWishlist };
