import { Router } from "express";
import authRoutes from "./authRoutes";
import productsRoutes from "./productRoutes";

const routes = Router();

routes.use(productsRoutes);
routes.use(authRoutes);

export default routes;
