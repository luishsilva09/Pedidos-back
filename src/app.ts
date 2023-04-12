import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

const app = express();
app.use(cors(), express.json());

app.use(errorHandlerMiddleware);

export default app;
