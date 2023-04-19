import { Router } from "express";
import authRoutes from "./authRoutes";
import orderRoutes from "./orderRoutes";
import productsRoutes from "./productRoutes";

const routes = Router();

routes.use(productsRoutes);
routes.use(authRoutes);
routes.use(orderRoutes);
export default routes;
