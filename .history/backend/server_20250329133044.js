import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.post("/products",async (req, res) => {
  const product = req.body; // user will send this data 

  if 
});

app.listen(5000, () => {
  connectDB();
  console.log("Server Started at http://localhost:5000");
});
//iPvSzZVyMRNA4mAs
