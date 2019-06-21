const express = require('express');

// const router = express.Router();
const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


router.get('/', (req, res) => {
    res.send(`
    <h2>Projects is working!</h2>
    `)
})

// CREATE
router.post('/', (req, res) => {

})

// READ
router.get('/', (req, res) => {

})

// UPDATE
router.put('/', (req, res) => {

})


// DELETE
router.delte('/', (req, res) => {

})


module.exports = router;