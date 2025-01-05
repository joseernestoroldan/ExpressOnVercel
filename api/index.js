import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
// import productRoutes from "./routes/products.route.js";
import { getAllProducts } from "./controllers/products.controller.js";


const app = express();
dotenv.config();

app.get("/api/products", getAllProducts);

connectDB().then(() => {
  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000");
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});

export default app;
