exports.up = function(knex) {
	return knex.schema.createTable('teachers', (tbl) => {
		tbl.increments();

		tbl.string('username', 128).notNullable().unique();
		tbl.string('password', 128).notNullable();
		tbl.string('first_name', 128);
		tbl.string('last_name', 128);
		tbl.string('email', 128).unique();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('teachers');
};
