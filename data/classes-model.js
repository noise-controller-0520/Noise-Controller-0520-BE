const db = require('./dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove,
	getTeachers,
	findByTeacher
};

function getTeachers() {
	return db('teachers');
}

function find() {
	return db('classes').select('id', 'class_name', 'teacher_id');
}

function findBy(filter) {
	return db('classes').where(filter);
}

function findByTeacher(id) {
	return db('classes').where({ teacher_id: id });
}

async function add(classInfo) {
	const [ id ] = await db('classes').insert(classInfo, 'id');

	return findById(id);
}

function findById(id) {
	return db('classes').select('id', 'class_name').where({ id }).first();
}

function update(id, changes) {
	return db('classes').where({ id }).update(changes);
}

function remove(id) {
	return db('classes').where('id', id).del();
}
