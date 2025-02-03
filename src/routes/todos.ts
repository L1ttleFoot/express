import { Router } from 'express';
import { createTodo, getTodoById, getTodos } from '../controllers/todos'

const router = Router();

router.get('/', getTodos);

router.get('/:id', getTodoById);

router.post('/', createTodo);

export default router; 