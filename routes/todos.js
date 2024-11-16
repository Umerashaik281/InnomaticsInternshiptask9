const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

// 1. POST /todos - Create a new to-do
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const todo = new Todo({
      title,
      description
    });

    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create to-do" });
  }
});

// 2. GET /todos - Retrieve all to-dos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve to-dos" });
  }
});

// 3. GET /todos/:id - Retrieve a specific to-do by ID
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "To-do not found" });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve to-do" });
  }
});

// 4. PUT /todos/:id - Update a to-do by ID
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "To-do not found" });
    }

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    todo.title = title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to update to-do" });
  }
});

// 5. DELETE /todos/:id - Delete a to-do by ID
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "To-do not found" });
    }

    res.status(200).json({ message: "To-do deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete to-do" });
  }
});

module.exports = router;
