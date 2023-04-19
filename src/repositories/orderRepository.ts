import { db } from "../dbStrategy/db";

export async function create(data: any) {
  return await db.order.create({ data });
}
