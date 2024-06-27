const express = require('express');
const router = express.Router();

let users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com' }
];

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
