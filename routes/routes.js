import { Router } from "express";
import products from "../modules/products.js";
const router = Router();
router.get("/products", (req, res) => {
  res.status(200).send(products);
});
export default router;
