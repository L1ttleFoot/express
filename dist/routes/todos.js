"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
let nextId = 1;
router.get('/', (req, res) => {
    res.json(todos);
});
/*
router.post('/', (req: Request, res: Response) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ message: 'Task is required' });
    }

    const newTodo: Todo = { id: nextId++, task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    const { task, completed } = req.body;
    if (task !== undefined) todo.task = task;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(t => t.id === parseInt(id));

    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todos.splice(todoIndex, 1);
    res.status(204).send();
});
*/
exports.default = router;
