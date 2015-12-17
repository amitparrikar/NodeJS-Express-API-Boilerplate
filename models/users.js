/**
 * Created by Amit on 22/11/15.
 * This Module is all about making actual db calls
 */
var db = require('../models/db');
var utils = require('../helpers/utils');

/**
 * Get a user by email
 */
exports.get = function(email, callback){
    var userCollection = db.get().collection('users');

    userCollection.find({email: email}).toArray(function(err, docs){
        if(err) return callback(err);
        callback(null, docs);
    });
}

/**
 * Create a new User
 */
exports.create = function(userObj, callback){
    var userCollection = db.get().collection('users');
    userObj.password = utils.hash(userObj.password);

    userCollection.save(userObj, function(err, docs){
        if(err) return callback(err);

        callback(null, docs);
    })
}

/**
 * Delete a user
 */
exports.delete = function(email, callback){
    var userCollection = db.get().collection('users');

    userCollection.remove({email: email}, function(err, docs){
        if(err) return callback(err);

        callback(null, docs);
    });
}

/**
 * Authenticate the user against the email and password
 * @param email
 * @param password
 * @param callback
 */
exports.authenticate = function(email, password, callback){
    var userCollection = db.get().collection('users');

    userCollection.find({email: email}).toArray(function(err, docs){
        if(err) return callback(err);
        if(docs.length === 0) return callback();

        var user = docs[0];
        if(user.password === utils.hash(password)){
            callback(null, user);
        }else{
            callback();
        }
    });
}