var express = require('express');
var router = express.Router();

var {login,dashboard,register,
    postRegister,logout,postLogin,home} = require('../controller/appController');
var {authenticate,getUserName} = require('../controller/appMiddleware');

router.get('/login', login);
router.post('/login', postLogin)
router.get('/dashboard', authenticate ,getUserName ,dashboard);
router.get('/register', register);
router.post('/register', postRegister);
router.delete('/logout', authenticate ,logout);
router.get('/', home)

module.exports = router;