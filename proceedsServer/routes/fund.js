var router = require('express').Router();
var sequelize = require('../db');
var Fund = sequelize.import('../models/fund');
var User = sequelize.import('../models/user');

router.post('/', function(req,res) {
	//req has some body properties that have a username a pwd
	var newFund = req.body.fund.newFund;
	var organization = req.body.fund.organization;
	var user = req.user;
	var organizationType = req.body.fund.organizationType;
	var goalAmount = req.body.fund.goalAmount;
	var timeFrame = req.body.fund.timeFrame;
	var purpose = req.body.fund.purpose;


//Use our sequelize model to create fund
	Fund
		.create({
			newFund: newFund,
			owner: user.id,
			organization: organization,
			organizationType: organizationType,
			goalAmount: goalAmount,
			timeFrame: timeFrame,
			purpose: purpose
		})
		.then(
			function createSuccess(log) {
				res.json(log);
			},
				function createError(err) {
					res.send(500, err.message);
				}
			);
	});
		
	router.get('/', function(req,res) {
		var userid = req.user.id;
		Fund
		.findAll({
			where: { owner: userid }
		})
		.then(
			function findAllSuccess(data) {
				//console.log(data);
				res.json(data);
			},
			function findAllError(err) {
				res.send(500, err.message);
			}
		);
	});

	//This will retrieve one workout specified by the fund id 
	router.get('/:id', function(req, res) {
		var data = req.params.id;
		//console.log(data); here for testing purposes
		Fund
			.findOne({
				where: { id: data }
			}).then(
			function getSuccess(updateData) {
				res.json(updateData);
			},

			function getError (err) {
				res.send(500, err.message);
			}
		);
	});



	module.exports = router;


