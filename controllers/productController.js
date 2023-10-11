// controllers/productController.js
const { Product } = require('../models/Product');

// Get a list of all products
const getAllProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(products);
  });
};

// Add a new product
const addProduct = (req, res) => {
  const { name, image, color, details, price } = req.body;
  const newProduct = new Product({ name, image, color, details, price });
  newProduct.save((err, product) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(201).json(product);
  });
};

// Update a product by ID
const updateProduct = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  Product.findByIdAndUpdate(id, updateData, { new: true }, (err, updatedProduct) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(updatedProduct);
  });
};

// Delete a product by ID
const deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndRemove(id, (err, deletedProduct) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(deletedProduct);
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
