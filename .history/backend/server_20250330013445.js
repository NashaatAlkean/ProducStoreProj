import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use;

app.listen(5000, () => {
  connectDB();
  console.log("Server Started at http://localhost:5000");
});
//iPvSzZVyMRNA4mAs
