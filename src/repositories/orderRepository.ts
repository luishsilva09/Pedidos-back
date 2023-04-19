import { db } from "../dbStrategy/db";

export async function create(data: any) {
  return await db.order.create({ data });
}

export async function listOrders() {
  return await db.order.findMany({
    include: { itens: {} },
  });
}
