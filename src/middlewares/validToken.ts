import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { unauthorizedError } from "../utils/errorUtils";

dotenv.config();
const secretKey = process.env.JWT_SECRET || "";

export default async function validToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) throw unauthorizedError("Invalid token");

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, secretKey, function (err, decode) {
    if (err) throw unauthorizedError(err.message);
  });

  next();
}
