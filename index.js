const express = require('express');
const helmet = require('helmet');

const server = require ('./server.js')

// Listening
/*
server.listen(6500, () => {
    console.log('Server running on localhost:6500!');
});
*/

const port = 6500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});


// 'Sanity Check'
server.get('/', (req, res) => {
    res.send(`
    <h2>Server is working!!</h2>
    `)
})