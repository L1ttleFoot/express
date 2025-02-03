import { Request, Response } from "express"

export const mockRequst = {

} as Request

export const mockResponse = {
    send: jest.fn(),
} as unknown as Response