const express = require('express');
const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

// CREATE - add an action
router.post('/', (req, res) => {
    const newAction = { project_id: req.body.project_id, description: req.body.description, notes: req.body.notes };

    db('actions')
        .insert(newAction)
        .then(addedAction => {
            res.status(201).json(addedAction);
        })
        .catch(error => {
            res.status(500).json({ error: 'The data could not be added.' })
        })
})

// READ - get actions
router.get('/', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

module.exports = router;