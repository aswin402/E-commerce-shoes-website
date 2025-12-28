import { Hono } from "hono";
import { config } from "./config/env";
import { connectDB } from "./db/db";
import productRouter from './routes/productRoute';

const app = new Hono();

await connectDB();

app.get("/", (c) => {
  return c.json({ message: "Shoes API with MongoDB 🚀" });
});

app.route("/api/products", productRouter);

export default {
  port: config.port,
  fetch: app.fetch,
};
