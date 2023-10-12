const express = require("express");
const router = express.Router();

// this route should get a product's details by its ID...
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
