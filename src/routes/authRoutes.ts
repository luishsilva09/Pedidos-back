import { Router } from "express";
import { schemaValidate } from "../middlewares/schemaValidateMiddleware";
import { newUserSchema, signinSchema } from "../schemas/authSchemas";
import * as authController from "../controllers/authController";

const authRoutes = Router();
//signin
authRoutes.post(
  "/users/signin",
  schemaValidate(signinSchema),
  authController.signin
);

//signup
authRoutes.post(
  "/users/signup",
  schemaValidate(newUserSchema),
  authController.signup
);

export default authRoutes;
