import { Router } from "express";
import productsRoutes from "./productRoutes";

const routes = Router();

routes.use(productsRoutes);
export default routes;
