const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

// Gets all products from db
router.get("/", getAllProducts);

// Gets a product by ID from db
router.get("/:id", getProductById);

module.exports = router;
