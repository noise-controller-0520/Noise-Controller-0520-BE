const jwt = require('jsonwebtoken');

const secrets = require('./secrets');

module.exports = {
	generateToken
};

function generateToken(user) {
	const payload = {
		subject  : user.id,
		username : user.username
		// teacher_id : [ teacher_id ]
	};

	const options = {
		expiresIn : '1d'
	};

	return jwt.sign(payload, secrets.jwtSecret, options);
}
