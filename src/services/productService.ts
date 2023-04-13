import { Prisma } from "@prisma/client";
import * as productRepository from "../repositories/productRepository";

export async function create(data: Prisma.ProductCreateInput) {
  await productRepository.create(data);
}
