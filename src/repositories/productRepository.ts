import { Prisma } from "@prisma/client";
import { db } from "../dbStrategy/db";

//new product
export async function create(productData: Prisma.ProductCreateInput) {
  return await db.product.create({ data: productData });
}
