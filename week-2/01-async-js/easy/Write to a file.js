const fs = require("fs");

fs.appendFile("temp.txt", "mai abhi bhi awara hu", function (err, data) {
  console.log(data);
});

fs.readFile("temp.txt", "utf-8", function (err, data) {
  console.log(data);
});