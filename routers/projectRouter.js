const express = require('express');
const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


// CREATE - add a project
router.post('/', (req, res) => {
    const newProject = { name: req.body.name, description: req.body.description };

    db('projects')
        .insert(newProject)
        .then(addedProject => {
            res.status(201).json(addedProject);
        })
        .catch(error => {
            res.status(500).json({ error: 'The new project could not be added.' })
        })
})

// READ - get all projects
router.get('/', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

// READ - get a project by id
router.get('/:id', (req, res) => {
    db('projects')
      .where({ id: req.params.id })
      .first()
      .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json(error);
    })
  });

// DELETE
router.delete('/:id', (req, res) => {
    db('projects')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            if (count > 0) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: 'Project not found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;

