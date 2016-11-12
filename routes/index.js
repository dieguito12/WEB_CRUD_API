var express = require('express');
var router = express.Router();


var usermodel = require('../model/user');


router.get('/allUsers', usermodel.getAllUsers);
router.get('/usersEnabled', usermodel.getAllEnabledUsers);
router.get('/usersDisabled', usermodel.getAllDisabledUsers);

router.post('/login', usermodel.postLogin);
router.post('/register', usermodel.postRegister);
router.post('/activateUser', usermodel.postActivateUser);
router.post('/disableUser', usermodel.postDisableUser);


module.exports = router;

