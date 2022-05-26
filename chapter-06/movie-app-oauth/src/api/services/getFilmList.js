const { Film } = require("../models");

const getFilmList = async () => {
  return await Film.findAll({});
};

module.exports = { getFilmList };
