import { Router } from "express";
import * as orderController from "../controllers/orderController";

const orderRoutes = Router();

//new order
orderRoutes.post("/order/new", orderController.newOrder);

//list orders
orderRoutes.get("/order", orderController.listOrders);

//get one order
orderRoutes.get("/order/:orderId");

export default orderRoutes;
