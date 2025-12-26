require("dotenv").config({ quiet: true });
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "tasks.json");

const ensureDataFile = () => {
  const dir = path.dirname(DATA_FILE);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
};

const readData = () => {
  ensureDataFile();
  const text = fs.readFileSync(DATA_FILE, "utf-8").trim();
  if (!text) return [];
  return JSON.parse(text);
};

const writeData = (data) => {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
};

const authorize = (req, res, next) => {
  const apiKey = req.get("x-api-key");

  if (!apiKey) {
    return res.status(401).json({ message: "API key is missing" });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Invalid API key" });
  }

  next();
};

app.get("/tasks", (_, res) => {
  const tasks = readData();
  return res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const tasks = readData();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.json(task);
});


app.post("/tasks", authorize, (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const tasks = readData();

  const newTask = {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  writeData(tasks);

  return res.status(201).json(newTask);
});

app.patch("/tasks/:id", authorize, (req, res) => {
  const { id } = req.params;

  const tasks = readData();
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.completed = true;

  writeData(tasks);
  res.json(task);
});


app.delete("/tasks/:id", authorize, (req, res) => {
  const { id } = req.params;

  const tasks = readData();
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const deletedTask = tasks.splice(index, 1)[0];
  writeData(tasks);

  return res.json(deletedTask);
});


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
