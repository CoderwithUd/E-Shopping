// server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Your API endpoints
app.get('/api/products', (req, res) => {
  // Replace this with your actual logic to fetch products
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
  ];
  res.json(products);
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
