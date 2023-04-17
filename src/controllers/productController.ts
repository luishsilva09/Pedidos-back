import { Request, Response } from "express";
import * as productService from "../services/productService";

//new product
export async function create(req: Request, res: Response) {
  await productService.create(req.body);
  res.status(201).send("Criado");
}
export async function findAll(req: Request, res: Response) {
  const data = await productService.listProducts();
  res.status(200).send(data);
}
