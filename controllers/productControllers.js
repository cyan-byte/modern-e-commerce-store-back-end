const Product = require("../models/Product.jsx");

// plural

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// singular and by ID

const getProductById = async (req, res) => {
  try {
    const product = await Product.findbyId(req.params.id); // from GET /api/products/:id

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// export the controllers

module.exports = {
  getAllProducts,
  getProductById,
};
