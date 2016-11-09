var express = require('express');
var router = express.Router();


var usermodel = require('../model/user');


router.get('/allUsers/:page/:perPage', usermodel.getAllUsers);
router.get('/usersEnabled/:page/:perPage', usermodel.getAllEnabledUsers);
router.get('/usersDisabled/:page/:perPage', usermodel.getAllDisabledUsers);

router.post('/login', usermodel.postLogin);
router.post('/register', usermodel.postRegister);
router.post('/activateUser', usermodel.postActivateUser);


module.exports = router;

