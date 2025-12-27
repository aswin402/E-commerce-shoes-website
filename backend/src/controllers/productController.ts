import type{ Context } from "hono";
import { productService } from "../services/productService";

export const ProductController = { 
  getAll: async (c: Context) => {
    const product = await productService.getAllProducts();
    return c.json(product);
  },

  getById: async (c: Context) => {
    const product = await productService.getProductById(c.req.param("id"));

    if (!product) {
      return c.json({ message: "Product not found" }, 404);
    }

    return c.json(product);
  },

  create: async (c: Context) => {
    const body = await c.req.json();
    const product = await productService.createProduct(body);
    return c.json(product, 201);
  },

  update: async (c: Context) => {
    const body = await c.req.json();
    const product = await productService.updateProduct(c.req.param("id"), body);

    if (!product) {
      return c.json({ message: "Product not found" }, 404);
    }

    return c.json(product);
  },

  remove: async (c: Context) => {
    const product = await productService.removeProduct(c.req.param("id"));

    if (!product) {
      return c.json({ message: "Product not found" }, 404);
    }

    return c.json({ message: "Product deleted" });
  },
};
