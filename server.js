// Express.js application setup

const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const session = require("express-session"); // session-based vs. user-based (I don't have user auth. yet)

const app = express();

// Connects to MongoDB database
mongoose.connect(
  "mongodb+srv://aliau2050:p6Fz1zNDYJGtUDt5@cluster0.qqaxcwg.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware and other configurations

app.use(bodyParser.json());
app.use(cors());

//express-session middleware
app.use(
  session({
    secret: "WHAT Rocks?!",
    resave: false,
    saveUninitialized: true,
  })
);

// Import routes (products, users[if necessary], and cart)
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Retrieve the user's cart data (session-based?)
app.get("/api/cart", cartController.getCart);
// get list of all products
app.get('/api/products', productController.getProducts);

// get product by ID
app.get('/api/products/:id', productController.getProductById);


// Add an item to the cart
app.post("/api/cart", cartController.addToCart);
app.post('/api/products', productController.addProduct);

// Update an existing product from cart
app.put('/api/products/:id', productController.updateProduct);

// Delete a product from cart
app.delete('/api/products/:id', productController.deleteProduct);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
