import { mockRequst, mockResponse } from "../../__mock__"
import { getTodos } from "../../controllers/todos"

describe('getTodos',()=>{
    it('should return todos', ()=>{
        getTodos(mockRequst, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith([])
    })
})