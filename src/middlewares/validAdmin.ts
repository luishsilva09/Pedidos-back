import { Request, Response, NextFunction } from "express";
import decodeToken from "../utils/decodeToken";
import { unauthorizedError } from "../utils/errorUtils";

export default function validAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const tokenData = decodeToken(req.headers.authorization);
  if (!tokenData.isAdmin) throw unauthorizedError("Usuario não autorizado");

  next();
}
