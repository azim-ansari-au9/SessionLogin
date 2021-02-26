var users = require('../data/users');

var middleware = {}

middleware.authenticate = function (req,res,next) {
    if (req.session.userId){
        next();
    } else {
        res.redirect('/login');
    }
}

middleware.getUserName = function (req,res,next) {
    var id = req.session.userId;
    var user = users.find(function (user) {
        return user.id === id;
    })
    res.locals.userName = user.name;
    next();
}

module.exports = middleware;