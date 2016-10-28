var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var routes = require('./routes/router'),
    armory = require('./routes/armory');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')
    .set('view options', {
        layout: false
    });

// configs
app.disable('x-powered-by') // ensure express header disable (helmet applies it)
    .disable('case sensitive routing') // ensuring no difference between /home or /HOME
    // .enable('strict routing') // ensuring no difference between /home or /home/
    // .set('trust proxy', 1) // trust first proxy
    .set('env', 'development') // app on development
    .use(logger('dev'));
if (app.settings.env !== 'development') { // check if app is on development status
    app.enable('view cache'); // enable views caching
}

// directories
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
    .use(express.static(path.join(__dirname, 'public')));

// parsers
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: false
    }))
    .use(cookieParser());

// routes 
app.use('/', routes);
app.use('/armory', armory);
app.get('*', function(req, res) {
    res.render('layout');
});

module.exports = app;
