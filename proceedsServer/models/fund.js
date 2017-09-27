// build a model in sequelize
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fund', {
		newFund: DataTypes.STRING,
		organization: DataTypes.STRING,
		organizationType: DataTypes.STRING,
		goalAmount: DataTypes.INTEGER,
		timeFrame: DataTypes.STRING,
		purpose: DataTypes.STRING
	});
};