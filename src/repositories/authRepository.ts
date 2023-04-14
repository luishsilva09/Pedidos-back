import { Prisma } from "@prisma/client";
import { db } from "../dbStrategy/db";
export async function findByEmail(email: string) {
  return await db.user.findUnique({ where: { email: email } });
}
