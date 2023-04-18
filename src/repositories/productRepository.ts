import { Prisma } from "@prisma/client";
import { db } from "../dbStrategy/db";

//new product
export async function create(productData: Prisma.ProductCreateInput) {
  return await db.product.create({ data: productData });
}

export async function findAll() {
  return await db.product.findMany();
}

export async function deleteById(productId: number) {
  return await db.product.delete({ where: { id: productId } });
}

export async function findById(productId: number) {
  return await db.product.findUnique({ where: { id: productId } });
}
