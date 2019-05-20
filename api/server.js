const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const classesRouter = require('./classes/classes-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/classes', classesRouter);

server.get('/', (req, res) => {
	res.send('Welcome to Noise Controller. Please register and login to start using our service.');
});

module.exports = server;
