import products from "../modules/products.js";
import { Router } from "express";
const router = Router();
router.get("/products", (req, res) => {
  res.status(200).send(products);
});
router.get("/", (req, res) => {
  res.status(200).send("");
});
export default router;
