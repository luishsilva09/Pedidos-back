import * as orderRepository from "../repositories/orderRepository";

export async function create(data: any) {
  await orderRepository.create(data);
}
