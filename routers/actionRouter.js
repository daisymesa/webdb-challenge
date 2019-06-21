const express = require('express');
const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


// router.get('/', (req, res) => {
//     res.send(`
//     <h2>Actions is working!</h2>
//     `)
// })

// CREATE
router.post('/', (req, res) => {

})

// READ
router.get('/', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

// UPDATE
router.put('/', (req, res) => {

})


// DELETE
router.delete('/', (req, res) => {

})

module.exports = router;