const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const characters = await Character.List();
  response(res, 200, characters);
};
