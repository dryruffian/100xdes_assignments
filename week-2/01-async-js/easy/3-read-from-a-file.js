const fs = require("fs");

fs.readFile("temp.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hehe mein toh bahar hai");

setTimeout(function () {
  console.log("inside");
}, 20);
console.log("After ");
