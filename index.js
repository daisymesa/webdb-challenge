const express = require('express');
const server = require ('./server.js')

// Listening
server.listen(6500, () => {
    console.log('Server running on localhost:6500!');
});

// 'Sanity Check'
server.get('/', (req, res) => {
    res.send(`
    <h2>Server is working!!</h2>
    `)
})