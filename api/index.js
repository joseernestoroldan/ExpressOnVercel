import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "./controllers/products.controller.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  //send html template as response
  res.send(`<div><h1> Welcome to the Products API </h1> <h2>This API has been developed by C2S.</h2></div>`);
});

app.use(express.json());

app.get("/api/products", getAllProducts);

app.post("/api/products", createProduct);

app.put("/api/products/:id", updateProduct);

app.delete("/api/products/:id", deleteProduct);

connectDB()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server started on http://localhost:4000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

export default app;
