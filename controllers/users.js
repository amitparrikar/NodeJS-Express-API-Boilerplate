/**
 * Created by Amit on 22/11/15.
 */
var express = require('express'),
    router = express.Router(),
    userModel = require('../models/users'),
    requireLogin = require('../helpers/utils').requireLogin;

/**
 * Get User by email
 */
router.get('/:email', requireLogin, function(req, res){

    userModel.get(req.params.email, function(err, user){
        res.send(user);
    });
});

/**
 * Create a new user
 */
router.post('/', function(req, res, next){
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: new Date()
    };

    userModel.create(user, function(err, newUser){
        if(err) next();
        res.status(200).send({status: 200, message: 'User Created Successfully'})
    });
});

/**
 * Delete a user
 */
router.delete('/:email', requireLogin, function(req, res, next){
    userModel.delete(req.params.email, function(err, user){
        if(err) next();
        res.status(200).send({status: 200, message: 'User Deleted Successfully'})
    });
})

module.exports = router;