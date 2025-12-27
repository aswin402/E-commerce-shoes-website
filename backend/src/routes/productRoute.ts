import { Hono } from "hono";
import { ProductController } from "../controllers/productController";

const productRouter = new Hono();

productRouter.get("/", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);
productRouter.post("/", ProductController.create);
productRouter.put("/:id", ProductController.update);
productRouter.delete("/:id", ProductController.remove);

export default productRouter;