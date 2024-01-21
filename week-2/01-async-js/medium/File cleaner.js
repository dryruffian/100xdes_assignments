const fs = require("fs");

fs.readFile("temp.txt", "utf-8", function (err, data) {
  data = data.replace(/\s+/g, " ");
  console.log(data);

  fs.writeFile("temp.txt", data, function (err) {
    console.log("data");
  });
});
