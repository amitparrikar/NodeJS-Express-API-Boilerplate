/**
 * Created by Amit on 22/11/15.
 */

var express = require('express'),
    db = require('./models/db'),
    config = require('./config/config'),
    logger = require('./config/logger'),
    cluster = require('cluster'),
    os = require('os');

if(cluster.isMaster){
    //It's a Master process

    var numWorkers = os.cpus().length;

    for(var i = 0; i < numWorkers; i++ ){
        cluster.fork();
    }

    /**
     * Register callback event 'online' on cluster module when a worker is UP
     */
    cluster.on('online', function(worker){
        LOGGER.log('info', 'Worker ' + worker.process.pid + ' is online');
    });

    /**
     * Register callback event 'exit' on cluster module when a worker DIES
     * And restart the died worker process
     */
    cluster.on('exit', function(worker, code, signal){
        LOGGER.log('warn', 'Worker ' + worker.process.pid + ' died with code: ' + code + ' and signal:' + signal);
        LOGGER.log('info', 'Starting a new worker');
        cluster.fork();
    });
}else{
    //It's a Worker process
    var app = express();

    require('./config/express')(app, config);

    db.connect(config.db, function(err){
        if(err){
            LOGGER.log('error', 'Unable to connect to Mongo');
            process.exit(1);
        }else{
            app.listen(config.port, function(){
                LOGGER.log('info', 'Listening on port ' + config.port);
            });
        }
    });
}


