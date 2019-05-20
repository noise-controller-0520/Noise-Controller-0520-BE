const router = require('express').Router();
const bcrypt = require('bcryptjs');

const tokenService = require('./token-service');
const Teachers = require('../data/teachers-model');

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	Teachers.add(user)
		.then((user) => {
			const token = tokenService.generateToken(user);
			res.status(201).json({
				message : `${user.first_name || user.username} successfully registered!`,
				token
			});
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Teachers.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = tokenService.generateToken(user);
				res.status(200).json({
					message : `Welcome ${user.first_name || user.username}!`,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid username or password.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

module.exports = router;
