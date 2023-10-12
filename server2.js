// Express.js application setup

const connectDB = require("./config/db");
const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const session = require("express-session"); // session-based vs. user-based (I don't have user auth. yet)

connectDB();

const app = express();

// Connects to MongoDB database
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successully connected");
    }
  }
);
mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

// Middleware and other configurations

app.use(bodyParser.json());
app.use(cors());

//express-session middleware
app.use(
  session({
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
app.get("/api/products", productController.getProducts);

// get product by ID
app.get("/api/products/:id", productController.getProductById);

// Add an item to the cart
app.post("/api/cart", cartController.addToCart);
app.post("/api/products", productController.addProduct);

// Update an existing product from cart
app.put("/api/products/:id", productController.updateProduct);

// Delete a product from cart
app.delete("/api/products/:id", productController.deleteProduct);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
