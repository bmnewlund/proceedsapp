var Sequelize = require('sequelize');
var sequelize = new Sequelize('proceeds', 'postgres', 'postgresadvent1952', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function() {
		console.log('connected to proceeds postgres db');
	},
	function(err){
		console.log(err);
	}
);
var User = sequelize.import('./models/user');

module.exports = sequelize;