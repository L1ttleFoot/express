import { Request, Response } from "express-serve-static-core";
import { CreateTodoDto } from "../dtos/CreateTodo.dto";
import { GetTodoById } from "../dtos/getTodoById";

export const getTodos = (req: Request, res: Response) => {
   
    res.status(200).json([])
}

export const getTodoById = (req: Request<GetTodoById>, res: Response):void => {
    const {id} = req.params

    const parsedId = parseInt(id)

    if(isNaN(parsedId)){
        res.status(400).json({msg:'bad req'})
        return
    }

    res.json({parsedId})
}

export const createTodo = (req: Request<{},{},CreateTodoDto>, res: Response) => {
    res.json({})
}