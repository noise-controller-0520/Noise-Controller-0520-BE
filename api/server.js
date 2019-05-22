const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const classesRouter = require('./classes/classes-router');
const sessionsRouter = require('./sessions/sessions-router');
const authenticate = require('../auth/authenticate');
const teacherIdCheck = require('../auth/teacher-id-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/classes', authenticate, classesRouter);
server.use('/sessions', authenticate, sessionsRouter);

server.get('/', (req, res) => {
	res.send('Welcome to Noise Controller. Please register and login to start using our service.');
});

module.exports = server;
