const { v4: uuidv4 } = require("uuid");

const generateUUID = async () => {
  return uuidv4();
};

module.exports = { generateUUID };
