import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import productRoutes from "./routes/products.route.js";


const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

connectDB().then(() => {
  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000");
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});

export default app;
