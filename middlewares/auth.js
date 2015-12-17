/**
 * Created by Amit on 22/11/15.
 */

var userModel = require('../models/users');

/**
 * This module checks the session, if present then update it, else set it to null and move to next middlewares
 * @param req
 * @param res
 * @param next
 */
module.exports = function(req, res, next){

    if(req.session && req.session.user){
        userModel.get(req.session.user.email, function(err, user){
            if(user){
                user.password = null;
                req.session.user = user;    //Refresh the session value
            }else{
                req.session = null;
            }
            next();
        });
    }else{
        next();
    }
}