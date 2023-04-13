import { Router } from "express";

const orderRoutes = Router();

//new order
orderRoutes.post("/order/new");

//list orders
orderRoutes.get("/order");

//get one order
orderRoutes.get("/order/:orderId");

export default orderRoutes;
