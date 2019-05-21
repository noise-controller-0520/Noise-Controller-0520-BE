const db = require('./dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove,
	findByClass
};

function find() {
	return db('sessions').select('*');
}

function findBy(filter) {
	return db('sessions').where(filter);
}

function findByClass(id) {
	return db('sessions').where({ class_id: id });
}

async function add(sessionInfo) {
	const [ id ] = await db('sessions').insert(sessionInfo, 'id');

	return findById(id);
}

function findById(id) {
	return db('sessions').select('*').where({ id }).first();
}

function update(id, changes) {
	return db('sessions').where({ id }).update(changes);
}

function remove(id) {
	return db('sessions').where('id', id).del();
}
