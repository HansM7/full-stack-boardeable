import { Request, Response } from "express";
import { boardService } from "../services/board.service";
import { IBoard } from "../models/interfaces/board.interface";

// authorization pending
class BoardController {
  async findBoards(req: Request, res: Response) {
    const id = "1";
    const response = await boardService.findBoards(id);
    res.status(response.code).json(response.response);
  }

  async createBoard(req: Request, res: Response) {
    const id = "1";
    const data: IBoard = req.body;
    const response = await boardService.createBoard(id, data);
    res.status(response.code).json(response.response);
  }
}

export const boardController = new BoardController();
