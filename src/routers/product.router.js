import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getOneProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
