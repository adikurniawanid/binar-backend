const { Wishlist } = require("../models");

const deleteWishlist = async (idParam) => {
  await Wishlist.destroy({
    where: {
      id: idParam,
    },
  });
};

module.exports = { deleteWishlist };
