const express = require('express');

const Sessions = require('../../data/sessions-model');

const router = express.Router();

router.get('/:id', (req, res) => {
	const class_id = req.params.id;
	// console.log(class_id);
	Sessions.findByClass(class_id)
		.then((session) => {
			if (session.length === 0) {
				res.status(204).json({ message: 'No session have been added yet.' });
			} else {
				res.status(200).json(session);
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'Your session could not be retrieved.', message: err.message });
		});
});

router.post('/', (req, res) => {
	const sessionInfo = req.body;
	// console.log(req.body);
	Sessions.add(sessionInfo)
		.then((session) => {
			if (!sessionInfo.length === 0) {
				res.status(400).json({ errorMessage: 'Please provide session details in this post.' });
			} else {
				res.status(201).json(session);
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ error: 'There was an error while saving the session to the database', message: err.message });
		});
});

router.delete('/:id', (req, res) => {
	const sessionId = req.params.id;
	// console.log('delete');
	Sessions.remove(sessionId)
		.then((session) => {
			if (!session) {
				res.status(404).json({ message: 'The session with the specified ID does not exist.' });
			} else {
				res.status(204).end();
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The session could not be removed' });
		});
});

router.put('/:id', (req, res) => {
	const sessionId = req.params.id;
	const sessionData = req.body;
	Sessions.update(sessionId, sessionData)
		.then((session) => {
			if (!session) {
				res.status(404).json({ message: 'The session with the specified ID does not exist.' });
			}
			if (!sessionData.length === 0) {
				res.status(400).json({ errorMessage: 'Please provide session details.' });
			} else {
				res.status(200).json(session);
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The session information could not be modified.', message: err.message });
		});
});

module.exports = router;
