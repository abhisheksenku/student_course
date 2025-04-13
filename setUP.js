const express = require('express');
const app = express();
const port = 3000;

const userRoute = require('./routes/users');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/cart');

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} request is made to ${req.url}`);
    next();
});

// Routes
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);

// 404 handler
app.use((req, res) => {
    res.status(404).send('<h1>404 Page not found</h1>');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
