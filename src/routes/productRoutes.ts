import { Router } from "express";
import * as productController from "../controllers/productController";
import { schemaValidate } from "../middlewares/schemaValidateMiddleware";
import { newProductSchema } from "../schemas/productSchemas";

const productsRoutes = Router();

//new product
productsRoutes.post(
  "/product/new",
  schemaValidate(newProductSchema),
  productController.create
);

//update product
productsRoutes.put(`/product/edit/:productId`);

//list products
productsRoutes.get("/product", productController.findAll);

//edit visibiliti
productsRoutes.post("/product/visibility:productId");

//get one product information
productsRoutes.get("/product/:productId");

export default productsRoutes;
