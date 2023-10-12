// This cart model represents items in the cart (product name, price, color, quantity)
const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
