exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('teachers').truncate().then(function() {
		// Inserts seed entries
		return knex('teachers').insert([
			{
				username   : 'user1',
				password   : 'pass',
				first_name : 'John',
				last_name  : 'Doe',
				email      : 'user1@lambda.dev'
			},
			{
				username   : 'user2',
				password   : 'pass',
				first_name : 'Jane',
				last_name  : 'Doe',
				email      : 'user2@lambda.dev'
			},
			{
				username   : 'user3',
				password   : 'pass',
				first_name : 'John',
				last_name  : 'Deer',
				email      : 'user3@lambda.dev'
			}
		]);
	});
};
