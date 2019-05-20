exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('sessions').truncate().then(function() {
		// Inserts seed entries
		return knex('sessions').insert([
			{
				class_id : 1,
				score    : 50,
				streak   : 0,
				theme    : 'ocean'
			},
			{
				class_id : 1,
				score    : 70,
				streak   : 1,
				theme    : 'ocean'
			},
			{
				class_id : 1,
				score    : 90,
				streak   : 2,
				theme    : 'ocean'
			},
			{
				class_id : 1,
				score    : 87,
				streak   : 3,
				theme    : 'ocean'
			},
			{
				class_id : 2,
				score    : 63,
				streak   : 0,
				theme    : 'ocean'
			},
			{
				class_id : 2,
				score    : 30,
				streak   : 0,
				theme    : 'ocean'
			}
		]);
	});
};
