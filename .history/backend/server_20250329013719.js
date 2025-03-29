import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server Started at http://localhost:5000");
});
//iPvSzZVyMRNA4mAs
