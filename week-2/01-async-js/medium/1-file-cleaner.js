function fileCleaner(path) {
  const fs = require("fs");
  fs.readFile(path, "utf-8", function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err.message}`);
    }

    console.log(`.....reading file '${path}' in progress!`);

    const fileContent = cleanFile(data);
    fs.writeFile(path, fileContent, function (err) {
      if (err) {
        console.error(`Error writing to the ${path}: ${err.message}`);
      } else {
        console.log(`File '${path}' has been cleaned and updated!`);
      }
    });
    return fileContent;
  });
}

function cleanFile(file) {
  const cleanedFile = file
    .split(" ")
    .filter((space) => space !== "")
    .join(" ");
  return cleanedFile;
}
fileCleaner("./1-file-cleaner.md");
