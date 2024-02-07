import { query } from "../database/postgresql";
import { IBoard } from "../models/interfaces/board.interface";

class BoardQuery {
  async findBoards(user_id: string) {
    const sql = "select*from boards where user_id = $1";
    const response = await query(sql, [user_id]);
    return response.rows;
  }

  async createBoard(user_id: string, data: IBoard) {
    const sql =
      "insert into boards(user_id,title,color) values($1,$2,$3) returning*";
    const response = await query(sql, [user_id, data.title, data.color]);
    return response.rows[0];
  }

  async findBoardForTitle(title: string) {
    const sql = "select*from boards where title = $1";
    const response = await query(sql, [title]);
    return response.rows[0];
  }

  async findBoardForId(id: string) {
    const sql = "select*from boards where id = $1";
    const response = await query(sql, [id]);
    return response.rows[0];
  }
}

export const boardQuery = new BoardQuery();
