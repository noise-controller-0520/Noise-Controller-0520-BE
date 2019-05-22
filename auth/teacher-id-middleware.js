module.exports = (req, res, next) => {
	const user_id = `${req.decodedJwt.subject}`;
	const teacher_id = req.params.id;

	// const user_id = `/${req.decodedJwt.subject}`;
	// const teacher_id = req.url;

	// console.log('userId', user_id);
	// console.log('teachID', teacher_id);

	if (user_id === teacher_id) {
		next();
	} else {
		res.status(403).json({ message: 'Access Denied: Teacher ID does not match.' });
	}
};
