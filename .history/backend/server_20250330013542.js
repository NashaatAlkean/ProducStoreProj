import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products", require("./routes/product..js"));

app.listen(5000, () => {
  connectDB();
  console.log("Server Started at http://localhost:5000");
});
//iPvSzZVyMRNA4mAs
