const express = require('express');

const router = require('express').Router();

const knex = require('knex');

const knexConfig = require('../knexfile.js');

/*
const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.db3'
    },
    useNullAsDefault: true
}
*/

const db = knex(knexConfig.development);

/*
router.get('/', (req, res) => {
    res.send(`
    <h2>Projects is working!</h2>
    `)
})
*/

// CREATE
router.post('/', (req, res) => {

})

// READ
router.get('/', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

// READ - get by id
router.get('/:id', (req, res) => {

})

// UPDATE
router.put('/', (req, res) => {

})


// DELETE
router.delete('/', (req, res) => {

})


module.exports = router;