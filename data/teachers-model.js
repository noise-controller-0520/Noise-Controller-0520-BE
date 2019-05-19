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
	const [ id ] = await db('teachers').insert(user);

	return findById(id);
}

function findById(id) {
	return db('teachers').select('id', 'username').where({ id }).first();
}
