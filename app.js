var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/router'),
    armory = require('./routes/armory');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'jade')
    .set('view options', {
        layout: false
    });

// configs
app
    .disable('x-powered-by') // ensure express header disable (helmet applies it)
    .disable('case sensitive routing') // ensuring no difference between /home or /HOME
    // .enable('strict routing') // ensuring no difference between /home or /home/
    // .set('trust proxy', 1) // trust first proxy
    .set('env', 'development'); // app on development
if (app.settings.env !== 'development') { // check if app is on development status
    app.enable('view cache'); // enable views caching
}

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
    .use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/armory', armory);
// app.get('*', function(req, res) {
//     res.render('layout');
// });

module.exports = app;
