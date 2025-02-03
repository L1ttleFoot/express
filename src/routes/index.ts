import { Router } from "express";
import todosRouter from "./todos"

const router = Router()

router.use('/api/todos',todosRouter)

export default router