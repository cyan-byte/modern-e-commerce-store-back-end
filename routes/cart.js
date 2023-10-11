const express = require('express');
const router = express.Router();

const cart = [];

// CREATE/ADD
router.post('/add-to-cart', (req, res) => {
  const { productId, quantity } = req.body;

  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  res.status(200).json({ message: 'Item added to the cart' });
});

// READ?
router.get('/get-cart', (req, res) => {
  res.status(200).json(cart);
});

// UPDATE
router.put('/update-quantity/:productId', (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  const itemToUpdate = cart.find((item) => item.productId === productId);

  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
    res.status(200).json({ message: 'Quantity updated' });
  } else {
    res.status(404).json({ message: 'Item not found in the cart' });
  }
});

// DELETE
router.delete('/remove-from-cart/:productId', (req, res) => {
  const { productId } = req.params;

  const itemIndex = cart.findIndex((item) => item.productId === productId);

  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item removed from the cart' });
  } else {
    res.status(404).json({ message: 'Item not found in the cart' });
  }
});

module.exports = router;
