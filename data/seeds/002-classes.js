exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('classes').truncate().then(function() {
		// Inserts seed entries
		return knex('classes').insert([
			{
				class_name : 'science',
				teacher_id : 2
			},
			{
				class_name : 'math',
				teacher_id : 2
			},
			{
				class_name : 'art',
				teacher_id : 2
			},
			{
				class_name : '3rd Grade',
				teacher_id : 2
			}
		]);
	});
};
