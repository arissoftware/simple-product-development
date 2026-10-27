import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { notFound } from "./errors/notFound.js";
import { errorHandler } from "./errors/errorHandler.js";
import productRouter from "./routers/product.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/products", productRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
