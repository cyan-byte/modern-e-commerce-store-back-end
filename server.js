// Express.js application setup

const express = require('express');
const app = express();

// Import routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

// Middleware and other configurations



// Use routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);



module.exports = app;