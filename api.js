const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
    res.send({ message: 'Hello this is My First API that I have deployed on render!' });
});

// POST route to handle JSON data
app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.send({ message: `Received data for ${name}, age ${age}.` });
});

// Start the server
app.listen(port, () => {
    console.log('server is up\n');
});
