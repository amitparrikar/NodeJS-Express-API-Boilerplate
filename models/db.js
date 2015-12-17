/**
 * Created by Amit on 22/11/15.
 */

var MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
}

/**
 * Connect to the database provided in the url argument
 */
exports.connect = function(url, done){
    if(state.db) return done();

    MongoClient.connect(url, function(err, db){

        if(err) return done(err);

        state.db = db;
        done();
    });
};

/**
 * Return the current Database State object
 */
exports.get = function(){
    return state.db;
};

/**
 * Close the database connection
 */
exports.close = function(done){
    if(state.db){
        state.db.close(function(err, result){
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
};