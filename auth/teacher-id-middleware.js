module.exports = (teacher_id) => {
	return function(req, res, next) {
		if (req.decodedJwt.subject && req.decodedJwt.subject.includes(teacher_id)) {
			next();
		} else {
			res.status(403).json({ message: 'You must login to access this data.' });
		}
	};
};
