var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Sequelize = require('sequelize');
var sequelizeConfig = require('.././database/config');


var User = sequelizeConfig.define('users', {

  id: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true
  },

  username: {
    type: Sequelize.STRING,
    field: 'username'
  },

  password: {
    type: Sequelize.STRING,
    field: 'userpassword'
  },

  phoneNumber: {
    type: Sequelize.STRING,
    field: 'phoneNumber'
  },

  mail: {
    type: Sequelize.STRING,
    field: 'mail'
  },

  address: {
    type: Sequelize.STRING,
    field: 'address'
  },

  isAdmin: {
    type: Sequelize.BOOLEAN,
    field: 'isAdmin'
  },


}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = {

  register: function (req, res, next){
    
    var bodyUser = {
      username  : req.body.username,
      password  : req.body.password,
      phoneNumber : req.body.phoneNumber,
      mail : req.body.mail,
      address : req.body.address,
      isAdmin : false
    }

    console.log("nombre" + req.body.username);


    ///test te connection with the data base
    sequelizeConfig.authenticate() .then(function () {

      User.findOne({
        where: {
          username: bodyUser.username
        } 

      }).then(function(result){
        if (!result) {
          
          User.create({
            
            username: bodyUser.username,
            password: bodyUser.password,
            phoneNumber: bodyUser.phoneNumber,
            mail : bodyUser.mail,
            address : bodyUser.address,
            isAdmin : bodyUser.isAdmin

          }).then(function(result){
          
            var obj = '{"data": {"message":"User created"}}';
            res.status(200);
            res.send(JSON.parse(obj));

          });
        }
      
        else {
          var obj = '{"error": {"message":"User already exists", "code":"400" }}';
          res.status(400);
          res.send(JSON.parse(obj));
        }
      });

    }).catch(function (err) {
          var obj = '{"error": {"message":"Database connection not Found", "code":"500" }}';
          res.status(500);
          res.send(JSON.parse(obj));
      }).done();

  },

	postLogin: function(req, res, next){

		var bodyUser = {

			username 	: req.body.username,
			password	: req.body.password
		}


		///test te connection with the data base
		sequelizeConfig.authenticate() .then(function () {

        	// create a token
	        var token = jwt.sign(bodyUser, 'superSecret', {
	          expiresIn: 1800 // expires in 30 min.
        	});

        	User.findOne({
	       		where: {
	       			username: bodyUser.username,
	       			password: bodyUser.password
	       		}

			}).then(function(result){

				var obj = '{'
	       		+'"id":"' + result.id + '",'
	       		+'"username":"' + result.username + '",'
	       		+'"token":"' + token + '"'
	       		+'}';

				res.send(JSON.parse(obj));

			}).catch(function (err) {
    			var obj = '{"error": {"message":"Invalid Credentials", "code":"400" }}';
          res.status(400);
        	res.send(JSON.parse(obj));
			});

    	}).catch(function (err) {
      		var obj = '{"error": {"message":"'+ err.message +'"}}';
          res.status(500);
       		res.send(JSON.parse(obj));
    	}).done();

	}

}