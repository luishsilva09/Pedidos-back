import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signup(req: Request, res: Response) {
  await authService.create(req.body);
  res.status(201).send("Criado");
}

export async function signin(req: Request, res: Response) {
  const token = await authService.signin(req.body);
  res.status(200).send(token);
}
