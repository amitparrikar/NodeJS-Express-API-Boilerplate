/**
 * Created by Amit on 22/11/15.
 */
var crypto = require('crypto');


var utils = {
    /**
     * Encrypt a given text with SHA1 and return value
     */
    hash: function(value){
        return crypto.createHash('sha1').update(value).digest('base64');
    },
    /**
     * Checks if it requires a login
     */
    requireLogin: function(req, res, next){
        if(!req.session.user){
            /*Redirect to the start page*/
            res.status(401).end();
        }else{
            next();
        }
    }
}


module.exports = utils;