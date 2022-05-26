const indexRouter = require("./index.route");
const filmRouter = require("./film.route");
const registerRouter = require("./register.route");
const wishlistRouter = require("./wishlist.route");
const loginRouter = require("./login.route");

module.exports = {
  indexRouter,
  registerRouter,
  filmRouter,
  wishlistRouter,
  loginRouter,
};
