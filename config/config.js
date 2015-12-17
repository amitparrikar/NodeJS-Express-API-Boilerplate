/**
 * Created by Amit on 22/11/15.
 */

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'expressapi'
        },
        port: 3000,
        db: 'mongodb://localhost/expressapi-dev',
        cookieSecret: 'mySecrete',
        cookieKey: 'myKey',
        sessionTimeout: 1000*150,
        logLevel: 'debug'
    },
    test: {
        root: rootPath,
        app: {
            name: 'expressapi'
        },
        port: 3000,
        db: 'mongodb://localhost/expressapi-test',
        cookieSecret: 'mySecrete',
        cookieKey: 'myKey',
        sessionTimeout: 1000*15,
        logLevel: 'debug'
    },
    production: {
        root: rootPath,
        app: {
            name: 'expressapi'
        },
        port: 3000,
        db: 'mongodb://localhost/expressapi-prod',
        cookieSecret: 'mySecrete',
        cookieKey: 'myKey',
        sessionTimeout: 1000*15,
        logLevel: 'debug'
    }
}

module.exports = config[env];