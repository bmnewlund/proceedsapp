var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


router.post('/', function(req, res) {
	// res.send(req.body.lastName)
		var firstName = req.body.firstName;
		var lastName = req.body.lastName;
		var email = req.body.email;
		var pass = req.body.password;
		//Need to create a user object and use sequelize to put that user into
		
		User.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			passwordhash: bcrypt.hashSync(pass, 10)
		}).then(
		//Sequelize is going to return the object it created from db.
			function createSuccess(user){
			    var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

				res.json({
						user: user,
						message: 'created',
						sessionToken: token
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
	});

module.exports = router;




