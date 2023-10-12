// Controller for managing the shopping cart

const { Cart } = require("../models/Cart.jsx");

// Add an item to the cart
const addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  Cart.findOne({ productId }, (err, cartItem) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (cartItem) {
      // Update the quantity if the item already exists
      cartItem.quantity += quantity;
      cartItem.save((err, updatedCartItem) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(updatedCartItem);
      });
    } else {
      // Add a new item to the cart
      const newCartItem = new Cart({ productId, quantity });
      newCartItem.save((err, addedCartItem) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        return res.status(201).json(addedCartItem);
      });
    }
  });
};

// Get the contents of the shopping cart
const getCart = (req, res) => {
  // Retrieves cart data from the session since I don't have user auth.
  const cart = req.session.cart || [];

  return res.status(200).json(cart);
};

// Update the quantity of an item in the cart
const updateCartItemQuantity = (req, res) => {
  const { cartItemId } = req.params;
  const { quantity } = req.body;

  // Find and update the cart item's quantity
  Cart.findByIdAndUpdate(
    cartItemId,
    { quantity },
    { new: true },
    (err, updatedCartItem) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json(updatedCartItem);
    }
  );
};

// Remove an item from the cart
const removeFromCart = (req, res) => {
  const { cartItemId } = req.params;

  // Find and remove the item from the cart
  Cart.findByIdAndRemove(cartItemId, (err, removedCartItem) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(removedCartItem);
  });
};

module.exports = {
  addToCart,
  getCart,
  updateCartItemQuantity,
  removeFromCart,
};
