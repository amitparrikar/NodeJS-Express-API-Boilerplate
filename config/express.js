/**
 * Created by Amit on 22/11/15.
 */

var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser');
var auth = require('../middlewares/auth');
var controllers = require('../controllers');
var setHeaders = require('../middlewares/response-headers');
var responseTimeLogger = require('../middlewares/response-time-log');
var errorHandlers = require('../middlewares/error-handlers');


module.exports = function(app, config){
    var env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';

    app.set('views', config.root + '/views');


    /*express middle layers functionality*/
    app.use(responseTimeLogger);
    app.use(setHeaders);
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(cookieSession({
        keys: [config.cookieKey],
        secrete: config.cookieSecret,
        maxAge: config.sessionTimeout
    }));

    app.use(auth);
    app.use(controllers);



    errorHandlers(app);
}