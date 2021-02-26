var users = require('../data/users');
const { v4: uuidv4 } = require('uuid');
var appController = {}

appController.register = function (req,res) {
    res.render('./pages/register');
}
appController.login = function (req,res) {
    res.render('./pages/login');
}
appController.home = function (req,res) {
    res.render('./pages/home');
}
appController.dashboard = function (req,res) {
    res.render('./pages/dashboard', {name: res.locals.userName, dashboard: true});
}
appController.postRegister = function (req,res) {
    var user = {
        id : uuidv4(),
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    };
    users.push(user);
    console.log(users);
    req.session.userId = user.id;
    res.redirect('/dashboard');
}
appController.postLogin = function (req,res) {
    var email = req.body.email;
    var pwd = req.body.password;
    var user = users.find(function (user) {
        return user.email === email && user.password === pwd;
    })
    if (user){
        req.session.userId = user.id;
        res.redirect('/dashboard');
    } else {
        res.redirect('/login');
    }
}
appController.logout = function (req,res) {
    req.session.destroy();
    res.redirect('/login');
}
module.exports = appController;