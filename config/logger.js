/**
 * Created by parrikaa on 26/11/15.
 */

var winston = require('winston');
var config = require('../config/config');

/**
 * Initialize the winston logger and create various logging files which will be auto created if not present.
 */
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({level: config.logLevel}),
        new (winston.transports.File)({name: 'error-file', level: 'error', filename: 'logs/fileLog-Error.log'}),
        new (winston.transports.File)({name: 'info-file', level: 'info', filename: 'logs/fileLog-Info.log'}),
        new (winston.transports.File)({name: 'warn-file', level: 'warn', filename: 'logs/fileLog-Warn.log'}),
        new (winston.transports.File)({name: 'debug-file', level: 'debug', filename: 'logs/fileLog-Debug.log'}),
        new (winston.transports.File)({name: 'exceptions-file', handleExceptions: true, humanReadableUnhandledException: true, filename: 'logs/fileLog-Exception.log'})
    ]
});

//Set the LOGGER as a global object
GLOBAL.LOGGER = logger;