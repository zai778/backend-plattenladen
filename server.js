import express from "express";
import dotenv from "dotenv";
import Router from "./routes/routes.js";
import { Track } from "./modules/products.js";
dotenv.config();
import "./lib/connect_db.js";
const app = express();
app.use(express.json());
app.use("/api", Router);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).send("");
});

app.get("/tracks", (req, res) => {
  const searchTerm = req.query.searchTerm || "";

  Track.find(
    {
      $or: [
        { artist: { $regex: searchTerm, $options: "i" } },
        { title: { $regex: searchTerm, $options: "i" } },
      ],
    },
    (err) => {
      if (err) throw err;
      res.status(404).send("nothing here get out!!!!!!!");
    }
  );
});
