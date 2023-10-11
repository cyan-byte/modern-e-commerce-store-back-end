const express = require('express');
const router = express.Router();
const { Product } = require('../models/Product');

// Get a list of all products
router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(products);
    }
  });
});

module.exports = router;