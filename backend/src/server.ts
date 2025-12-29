import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";

import { config } from "./config/env";
import { connectDB } from "./db/db";
import productRouter from './routes/productRoute';


const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "http://localhost:3000",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
  })
);

app.use(
  "/images/*",
  serveStatic({
    root: "./",
  })
);

await connectDB();

app.get("/", (c) => {
  return c.json({ message: "Shoes API with MongoDB 🚀" });
});

app.route("/api/products", productRouter);

export default {
  port: config.port,
  fetch: app.fetch,
};
