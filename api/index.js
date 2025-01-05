import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import productRoutes from "./routes/products.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/products", productRoutes);

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
