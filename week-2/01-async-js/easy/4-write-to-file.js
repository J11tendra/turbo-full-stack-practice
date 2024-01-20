function writeToFile(path) {
  const fs = require("fs");
  const dataAddition = "\nThis is the addition line I am adding.";
  fs.appendFile(path, dataAddition, function (err) {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
    } else {
      console.log("Added data");
    }
  });
  fs.readFile('../counter.jsx', "utf-8", function (err, data) {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      console.log(data);
    }
  });
}

writeToFile("./1-counter.js");
