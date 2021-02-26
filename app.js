var express = require('express');
var session = require('express-session');
var hbs = require('hbs');
// var methodOverride = require('method-override');

var router = require('./routes/routes');

var app = express();
app.listen(3000, () => {
    console.log('server startd');
    
});

app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');

app.use(session({
    name: "sessionId",
    secret: "ranom1234",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 5000,
        secure: false
    }
}))

// app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(router);