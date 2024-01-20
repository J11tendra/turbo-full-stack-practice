const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());

// Read files;
function loadTodoJson() {
  try {
    const todoData = fs.readFileSync("./todos.json", "utf-8");
    return JSON.parse(todoData) || [];
  } catch (err) {
    console.error(`Error reading data: ${err.message}`);
    return [];
  }
}

// Writing to file;
function writeTodoJson() {
  try {
    const todoData = JSON.stringify(todosArray, null, 2);
    fs.writeFileSync("./todos.json", todoData, "utf-8");
  } catch (err) {
    console.error(`Error writing todos to JSON file: ${err.message}`);
  }
}

let todosArray = loadTodoJson();

// Get all todos;
app.get("/todos", function (req, res) {
  try {
    if (todosArray.length === 0) {
      res.status(404).send("You don't have any todo's yet!");
    } else {
      const todosList = todosArray.map((todo) => ({
        id: todo.id,
        title: todo.title,
        status: todo.isCompleted,
      }));
      res.status(200).json(todosList);
    }
  } catch (err) {
    res.status(404).send(`You enter a wrong path: ${err.message}`);
  }
});

// Getting a specific todo by id;
app.get("/todos/:id", function (req, res) {
  const path = req.params.id;
  try {
    const matchedTodo = todosArray.filter(
      (matchedTodo) => matchedTodo.id === path
    );
    res.status(200).json(matchedTodo);
  } catch (err) {
    res.status(404).send(`Error getting your todo: ${err.message}`);
  }
});

// Creating a new todo:
app.post("/todos", function (req, res) {
  try {
    const newTodo = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      isCompleted: false,
    };
    todosArray.push(newTodo);
    writeTodoJson();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).send(`Internal Server Error: ${err.message}`);
  }
});

// Updating the todo;
app.put("/todos/:id", function (req, res) {
  try {
    const path = req.params.id;
    let updatedTodosArray = todosArray.filter((todo) => todo.id !== path);
    let matchedTodo = todosArray.find((matchedTodo) => matchedTodo.id === path);
    matchedTodo = {
      ...matchedTodo,
      title: req.body.title,
      description: req.body.description,
      isCompleted: req.body.status !== undefined ? req.body.status : false,
    };

    if (todosArray.length === updatedTodosArray.length) {
      // No matching todo found
      res.status(404).send("Todo not found");
      return;
    }

    // Update todosArray with the filtered array
    updatedTodosArray.push(matchedTodo);
    todosArray = updatedTodosArray;
    writeTodoJson();
    res.status(200).json(matchedTodo);
  } catch (err) {
    res.status(404).send(`Error getting your todo: ${err.message}`);
  }
});

// Deleting todo by ID;
app.delete("/todos/:id", function (req, res) {
  try {
    const path = req.params.id;
    const updatedTodosArray = todosArray.filter((todo) => todo.id !== path);

    if (todosArray.length === updatedTodosArray.length) {
      // No matching todo found
      res.status(404).send("Todo not found");
      return;
    }

    // Update todosArray with the filtered array
    todosArray = updatedTodosArray;
    writeTodoJson();

    res.status(204).send(); 
  } catch (err) {
    res.status(500).send(`Internal Server Error: ${err.message}`);
  }
});

// Route handler for unknown paths;
app.use((req, res) => {
  res.status(404).send("Internal Error Page not found!");
});

app.listen(port);
