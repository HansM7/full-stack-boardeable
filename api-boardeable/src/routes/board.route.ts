import express from "express";
import { boardController } from "../controllers/board.controller";
import { boardMiddleware } from "../middlewares/board.middleware";
import { cardController } from "../controllers/card.controller";
import { cardMiddleware } from "../middlewares/card.midldleware";

const boardRouter = express.Router();

const prefix = "/boards";

boardRouter.get(`${prefix}`, boardController.findBoards);
boardRouter.post(
  `${prefix}`,
  boardMiddleware.validateBoard,
  boardController.createBoard
);

// board detail ----------------------------------------------------------

boardRouter.get(`${prefix}/:id`, cardController.findCards);

boardRouter.post(
  `${prefix}/:id`,
  cardMiddleware.validateCard,
  cardController.createCard
);

// cards --------------------------------------------------------

boardRouter.get(`${prefix}/:id/cards`, cardController.findCards);
boardRouter.post(
  `${prefix}/:id/cards`,
  cardMiddleware.validateCard,
  cardController.createCard
);

export default boardRouter;
