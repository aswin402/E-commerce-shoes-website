import { ProductsModel } from "../models/products";

export const productService = {
  getAllProducts: () => ProductsModel.find(),

  getProductById: (id: string) => ProductsModel.findById(id),

  createProduct: (data: any) => ProductsModel.create(data),

  updateProduct: (id: string, data: any) =>
    ProductsModel.findByIdAndUpdate(id, data, { new: true }),

  removeProduct: (id: string) => ProductsModel.findByIdAndDelete(id),
}