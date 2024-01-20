/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs").promises;
const fileDirectory = "./files";
const port = 3000;

// Getting the files from the directory:
app.get("/files", async function (req, res) {
  try {
    const dirFiles = await fs.readdir(fileDirectory);
    res.status(200).json(dirFiles);
  } catch (err) {
    res.status(500).send("Internal server error.");
  }
});

// Getting file content:
app.get("/files/:filename", async function (req, res) {
  try {
    const fileName = req.params.filename;
    const filePath = path.join(fileDirectory, fileName);
    const fileContent = await fs.readFile(filePath, "utf-8");
    res.status(200).json(fileContent);
  } catch (err) {
    res.status(404).send("File does not exists.");
  }
});

app.listen(port);
module.exports = app;
