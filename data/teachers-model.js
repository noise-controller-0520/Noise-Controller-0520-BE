const db = require('./dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById
};

function find() {
	return db('teachers').select('id', 'username');
}

function findBy(filter) {
	return db('teachers').where(filter);
}

async function add(user) {
	const [ id ] = await db('teachers').insert(user, 'id');

	return findById(id);
}

function findById(id) {
	return db('teachers').select('*').where({ id }).first();
}
