import { Prisma } from "@prisma/client";
import * as productRepository from "../repositories/productRepository";
import { notFoundError } from "../utils/errorUtils";

export async function create(data: Prisma.ProductCreateInput) {
  await productRepository.create(data);
}

export async function listProducts() {
  return await productRepository.findAll();
}

export async function deleteById(productId: number) {
  if (!(await productRepository.findById(productId)))
    throw notFoundError("Produto não encontrado");
  return await productRepository.deleteById(productId);
}
