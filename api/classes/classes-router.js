const express = require('express');

const Classes = require('../../data/classes-model');

const router = express.Router();

//not to be used in production, only for development and testing purposes

router.get('/teachers', (req, res) => {
	Classes.getTeachers()
		.then((teachers) => {
			res.status(200).json(teachers);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

//not to be used in production, only for development and testing purposes

// router.get('/', (req, res) => {
// 	Classes.find()
// 		.then((classes) => {
// 			res.status(200).json(classes);
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'Oops, something went wrong!', message: err.message });
// 		});
// });

router.get('/:id', (req, res) => {
	const teacher_id = req.params.id;
	// console.log(teacher_id);
	Classes.findByTeacher(teacher_id)
		.then((classes) => {
			if (classes.length === 0) {
				res.status(204).json({ message: 'No classes have been added yet.' });
			} else {
				res.status(200).json(classes);
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'Your classes could not be retrieved.', message: err.message });
		});
});

router.post('/', (req, res) => {
	const classInfo = req.body;
	// console.log(req.body);
	Classes.add(classInfo)
		.then((classes) => {
			if (!classInfo.length === 0) {
				res.status(400).json({ errorMessage: 'Please provide class details in this post.' });
			} else {
				res.status(201).json(classes);
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ error: 'There was an error while saving the class to the database', message: err.message });
		});
});

router.delete('/:id', (req, res) => {
	const classId = req.params.id;
	// console.log('delete');
	Classes.remove(classId)
		.then((classes) => {
			if (!classes) {
				res.status(404).json({ message: 'The class with the specified ID does not exist.' });
			} else {
				res.status(204).end();
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The class could not be removed' });
		});
});

router.put('/:id', (req, res) => {
	const classId = req.params.id;
	const classData = req.body;
	Classes.update(classId, classData)
		.then((classes) => {
			if (!classes) {
				res.status(404).json({ message: 'The class with the specified ID does not exist.' });
			}
			if (!classData.length === 0) {
				res.status(400).json({ errorMessage: 'Please provide class details.' });
			} else {
				res.status(200).json(classes);
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The class information could not be modified.', message: err.message });
		});
});

module.exports = router;
