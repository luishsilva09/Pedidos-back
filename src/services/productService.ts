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

export async function findById(productId: number) {
  const productData = await productRepository.findById(productId);
  if (!productData) throw notFoundError("Produto não encontrado");
  return productData;
}
