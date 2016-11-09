var express = require('express');
var router = express.Router();


var usermodel = require('../model/user');


router.post('/login', usermodel.postLogin);
router.post('/register', usermodel.register);
router.post('/activateUser', usermodel.activateUser);


module.exports = router;

