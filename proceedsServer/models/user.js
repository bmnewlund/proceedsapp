// user model created using sequelize
// talks to the table user

module.exports = function(sequelize, DataTypes){
			return sequelize.define('user', {
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			passwordhash: DataTypes.STRING
		});
	};
