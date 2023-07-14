const server = require("./src/server");

// const { /*Character*/ /*Film*/ Planet } = require("./src/database");

// Film.get().then((res)=>console.log(res))

// Planet.insert({
//   _id: "201",
//   name: "saturno",
//   rotation_period: "45",
//   orbital_period: "4818",
//   diameter: "10257",
// }).then((res) => console.log(res));

// Planet.get(3).then((res) => console.log(res));
// Film.get(2).then((res) => console.log(res));

server.listen(8004, () => {
  console.log(`Database server on PORT 8004`);
});
