const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(express.json());

// setting up routers
const ProjectRouter = require('./routers/projectRouter');
const ActionRouter = require('./routers/actionRouter');

server.use('/api/projects', ProjectRouter);
server.use('/api/actions', ActionRouter);

module.exports = server;
