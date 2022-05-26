const { Wishlist } = require("../models");

const getWishlistById = async (idParam) => {
  const wishlist = await Wishlist.findOne({
    where: {
      id: idParam,
    },
  });

  if (wishlist == null) {
    return null;
  }

  return {
    wishlist,
  };
};

module.exports = { getWishlistById };
