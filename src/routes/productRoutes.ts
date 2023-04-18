import { Router } from "express";
import * as productController from "../controllers/productController";
import { schemaValidate } from "../middlewares/schemaValidateMiddleware";
import validAdmin from "../middlewares/validAdmin";
import validToken from "../middlewares/validToken";
import { newProductSchema } from "../schemas/productSchemas";

const productsRoutes = Router();

//new product
productsRoutes.post(
  "/product/new",
  validToken,
  validAdmin,
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

//delete product
productsRoutes.delete(
  "/product/delete/:productId",
  validToken,
  validAdmin,
  productController.deleteById
);

export default productsRoutes;
