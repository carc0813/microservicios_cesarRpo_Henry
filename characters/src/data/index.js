const axios = require("axios");
const characters = require("./characters.json");

module.exports = {
  List: async () => {
  //   const results = axios.get("http://database:8004/Character");
  //  // console.log(results)
  //   return results.data;
     return characters;
  },
  create: async () => {
    throw Error(" Hay un error en la BD al crear personaje");
  },
};
