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

export async function deleteById(req: Request, res: Response) {
  const productId = Number(req.params.productId);
  await productService.deleteById(productId);
  res.status(200).send("Deletado com sucesso");
}

export async function findById(req: Request, res: Response) {
  const productId = Number(req.params.productId);
  const data = await productService.findById(productId);
  res.status(200).send(data);
}

export async function update(req: Request, res: Response) {
  const productId = Number(req.params.productId);
  const data = req.body;
  res.status(200).send("Atualizado com sucesso");
}
