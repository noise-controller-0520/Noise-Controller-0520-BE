const express = require('express');

const Classes = require('../../data/classes-model');

const router = express.Router();

router.get('/', (req, res) => {
	Classes.getTeachers()
		.then((teachers) => {
			res.status(200).json(teachers);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

router.get('/', (req, res) => {
	Classes.find()
		.then((classes) => {
			res.status(200).json(classes);
		})
		.catch((err) => {
			res.status(500).json({ error: 'Oops, something went wrong!', message: err.message });
		});
});

router.get('/:id', (req, res) => {
	const teacher_id = req.params.id;
	// console.log(teacher_id);
	Classes.findByTeacher(teacher_id)
		.then((classes) => {
			if (classes.length === 0) {
				res.status(404).json({ message: 'Teacher ID does not exist.' });
			} else {
				res.status(200).json(classes);
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'Your classes could not be retrieved.', message: err.message });
		});
});

// router.post('/', (req, res) => {
// 	const postData = req.body;
// 	db
// 		.insert(postData)
// 		.then((post) => {
// 			if (!postData.text) {
// 				res.status(400).json({ errorMessage: 'Please provide valid texts in this post.' });
// 			} else {
// 				res.status(201).json(post);
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'There was an error while saving the post to the database' });
// 		});
// });

// router.delete('/:id', (req, res) => {
// 	const postId = req.params.id;
// 	console.log('delete');
// 	db
// 		.remove(postId)
// 		.then((post) => {
// 			if (!post) {
// 				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
// 			} else {
// 				res.status(204).end();
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'The post could not be removed' });
// 		});
// });

// router.put('/:id', (req, res) => {
// 	const postId = req.params.id;
// 	const postData = req.body;
// 	db
// 		.update(postId, postData)
// 		.then((post) => {
// 			if (!post) {
// 				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
// 			}
// 			if (!postData.text) {
// 				res.status(400).json({ errorMessage: 'Please provide valid text for the post.' });
// 			} else {
// 				res.status(200).json(post);
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'The post information could not be modified.' });
// 		});
// });

module.exports = router;
