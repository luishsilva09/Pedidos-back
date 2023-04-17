import { Prisma } from "@prisma/client";
import * as productRepository from "../repositories/productRepository";

export async function create(data: Prisma.ProductCreateInput) {
  await productRepository.create(data);
}

export async function listProducts() {
  return await productRepository.findAll();
}
