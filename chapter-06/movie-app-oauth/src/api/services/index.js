const { getFilmList } = require("./getFilmList");
const { getWishlist } = require("./getWishlist");
const { isUsernameExists } = require("./isUsernameExists");
const { addUser } = require("./addUser");
const { addWishlist } = require("./addWishlist");
const { deleteWishlist } = require("./deleteWishlist");
const { getWishlistById } = require("./getWishlistById");
const { addAdmin } = require("./addAdmin");
const { addFilm } = require("./addFilm");

module.exports = {
  getFilmList,
  getWishlist,
  isUsernameExists,
  addUser,
  addWishlist,
  deleteWishlist,
  getWishlistById,
  addAdmin,
  addFilm,
};
