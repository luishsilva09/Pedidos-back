import * as orderRepository from "../repositories/orderRepository";

export async function create(data: any) {
  const insertData = {
    name: data.name,
    phoneNumber: data.phoneNumber,
    date: data.date,
    amount: data.amount,
  };
  await orderRepository.create(insertData);
}

export async function listOrders() {
  return await orderRepository.listOrders();
}
