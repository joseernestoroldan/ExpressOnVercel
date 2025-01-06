import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "../config/db.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "./controllers/products.controller.js";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();
console.log(__dirname);

app.get("/", (req, res) => {
  //send documentation.html template file as a response that is in the api folder.
  res.sendFile(path.join(__dirname, "api", "documentation.html"));
});

app.use(express.json());

app.get("/api/products", getAllProducts);

app.post("/api/products", createProduct);

app.put("/api/products/:id", updateProduct);

app.delete("/api/products/:id", deleteProduct);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

export default app;
