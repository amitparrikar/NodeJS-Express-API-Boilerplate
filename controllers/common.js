/**
 * Created by Amit on 22/11/15.
 */

var express = require('express'),
    router = express.Router(),
    userModel = require('../models/users');

/**
 * The root API call, eventually index.html will be send as it is served through public static folder
 */
router.get('/', function(req, res){
    res.send('index.html');
});

/**
 * Login route, used to login a user
 */
router.post('/login', function(req, res){

    var email = req.body.email;
    var pwd = req.body.password;


    userModel.authenticate(email, pwd, function(err, user){
        if(err){
            return res.status(500).send({message: 'Error Occured'});
        }
        if(!user){
           return res.status(404).send({message: 'User Not Found'});
        }
        req.session.user = user;
        
        //res.redirect('/dashoard');
        return res.status(200).send({message: 'Login Successful'});

    });
});

/**
 * Logout route, used to logout a user
 */
router.post('/logout', function(req, res){
    req.session.user = null;
    return res.status(200).send({message: 'User Successfuly logged out'});
});


module.exports = router;