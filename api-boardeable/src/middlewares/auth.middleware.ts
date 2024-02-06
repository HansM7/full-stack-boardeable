import { NextFunction, Request, Response } from "express";
import { authDTO } from "../models/dtos/auth.dto";
import { http } from "../models/http/response.http";

class AuthMiddleware {
  async validateSignup(req: Request, res: Response, next: NextFunction) {
    try {
      authDTO.parse(req.body);
      next();
    } catch (error) {
      const res_http = http.http500("Error in schema", error);
      res.status(res_http.code).json(res_http.response);
    }
  }
}

export const authMiddleware = new AuthMiddleware();
