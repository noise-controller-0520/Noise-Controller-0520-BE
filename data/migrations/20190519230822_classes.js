exports.up = function(knex) {
	return knex.schema.createTable('classes', (tbl) => {
		tbl.increments();

		tbl.string('class_name', 128).notNullable();

		tbl
			.integer('teacher_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('teachers')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('classes');
};
