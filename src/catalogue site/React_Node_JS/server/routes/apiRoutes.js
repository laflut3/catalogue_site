const express = require('express');
const router = express.Router();

let users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com' }
];

const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
};

function convertPrice(price, fromCurrency, toCurrency) {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return (price * rate).toFixed(2);
}

let products = [
    { id: 1, name: 'product1', price: convertPrice(100, 'USD', 'USD'), description: 'description1', moneyType: 'USD'},
    { id: 2, name: 'product2', price: convertPrice(200, 'EUR', 'USD'), description: 'description2', moneyType: 'USD'}
];

router.get('/products', (req, res) => {
    res.json(products);
    console.log('GET /api/products');
});

router.post('/products', (req, res) => {
    const { name, price } = req.body;
    const id = products.length + 1;
    const newProduct = { id, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
    console.log('POST /api/products');
});

router.get('/users', (req, res) => {
    res.json(users);
    console.log('GET /api/users');
});

router.post('/users', (req, res) => {
    const { username, email } = req.body;
    const id = users.length + 1;
    const newUser = { id, username, email };
    users.push(newUser);
    res.status(201).json(newUser);
    console.log('POST /api/users');
});


module.exports = router;
