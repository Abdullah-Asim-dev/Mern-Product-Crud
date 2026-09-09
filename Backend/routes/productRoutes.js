import express from "express";
import upload from "../middleware/upload.js";

import {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Add Product
router.post("/addProduct", upload.single("image"), addProduct);

// Get All Products
router.get("/getProducts", getProducts);

// Get Single Product
router.get("/getProduct/:id", getProduct);

// Update Product
router.put("/update/:id", updateProduct);

// Delete Product
router.delete("/delete/:id", deleteProduct);

export default router;