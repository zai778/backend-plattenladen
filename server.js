import express from "express";
import dotenv from "dotenv";
import Router from "./routes/routes.js";
dotenv.config();

const app = express();
app.use("/api", Router);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).send("");
});
