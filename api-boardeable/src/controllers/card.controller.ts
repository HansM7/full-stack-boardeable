import { Request, Response } from "express";
import { cardService } from "../services/card.service";
import { ICard } from "../models/interfaces/card.interface";

class CardController {
  async findCards(req: Request, res: Response) {
    const board_id = req.params.id;
    const response = await cardService.findCards(board_id);
    res.status(response.code).json(response.response);
  }

  async createCard(req: Request, res: Response) {
    const board_id = req.params.id;
    const data: ICard = req.body;
    const response = await cardService.createCard({ ...data, board_id });
    res.status(response.code).json(response.response);
  }
}

export const cardController = new CardController();
