const { Film } = require("../models");

const addFilm = async (nameParam) => {
  await Film.create({
    name: nameParam,
  });
};

module.exports = { addFilm };
