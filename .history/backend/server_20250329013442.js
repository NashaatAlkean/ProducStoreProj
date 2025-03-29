import express from "express";

const app = express();

app.get("/products", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  console.log("Server Started at http://localhost:5000");
});
//iPvSzZVyMRNA4mAs
