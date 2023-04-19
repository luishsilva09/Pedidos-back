import { Request, Response } from "express";
import * as orderService from "../services/orderService";

export async function newOrder(req: Request, res: Response) {
  await orderService.create(req.body);
  res.status(201).send("pedido criado com sucesso");
}
