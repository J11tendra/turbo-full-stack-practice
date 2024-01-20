function logFile(path) {
  const fs = require("fs");
  fs.readFile(path, "utf-8", function (err, data) {
    console.log(data);
  });

  for (let i = 0; i <= 99999; i++) {
    console.log(i);
  }
}

logFile("./1-counter.js");
