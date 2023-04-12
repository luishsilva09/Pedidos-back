import cors from "cors";
import express from "express";

const app = express();
app.use(cors(), express.json());

export default app;
