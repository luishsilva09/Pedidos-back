import { Request, Response } from "express";
import * as orderService from "../services/orderService";

export async function newOrder(req: Request, res: Response) {
  await orderService.create(req.body);
  res.status(201).send("pedido criado com sucesso");
}

export async function listOrders(req: Request, res: Response) {
  const data = await orderService.listOrders();
  res.status(200).send(data);
}
