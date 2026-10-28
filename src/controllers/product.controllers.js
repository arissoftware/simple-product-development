import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { ApiError } from "../errors/apiErrors.js";
import { products } from "../db/schema.js";

export const createProduct = async (req, res, next) => {
  const { name, category, description, stock, price, image, isActive } =
    req.body;

  if (!name || !category || !stock || !price) {
    return next(
      new ApiError(
        400,
        "All fields are required except description and isActive",
      ),
    );
  }

  const [newProduct] = await db
    .insert(products)
    .values({
      name,
      description,
      category,
      price,
      stock,
      image,
      isActive,
    })
    .returning();

  return res.status(201).json({
    success: true,
    message: "Product added successfully",
    newProduct,
  });
};

export const getAllProducts = async (req, res, next) => {
  const allProducts = await db.select().from(products);

  if (allProducts.length === 0) {
    return next(new ApiError(404, "No product found"));
  }

  return res.status(200).json({
    products: allProducts,
  });
};

export const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ApiError(404, `Please provide the id of the product`));
  }
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, Number(id)));

  if (product.length === 0) {
    return next(new ApiError(404, `Product with the id ${id} not found`));
  }

  return res.status(200).json(product);
};

export const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ApiError(404, `Please provide the id of the product`));
  }

  const { name, category, description, stock, price, image, isActive } =
    req.body;

  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, Number(id)));

  if (product.length === 0) {
    return next(new ApiError(404, `Product with the id ${id} not found`));
  }

  const [updatedProduct] = await db
    .update(products)
    .set({
      name,
      description,
      isActive,
      price,
      stock,
      category,
      image,
    })
    .where(eq(products.id, id))
    .returning();

  return res.status(200).json({
    message: "Product updated successfully",
    updatedProduct,
  });
};

export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ApiError(404, `Please provide the id of the product`));
  }

  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, Number(id)));

  if (product.length === 0) {
    return next(new ApiError(404, `Product with the id ${id} not found`));
  }

  const [deletedProduct] = await db
    .delete(products)
    .where(eq(products.id, Number(id)))
    .returning();

  return res.status(200).json({
    message: "Product deleted successfully",
    deletedProduct,
  });
};
