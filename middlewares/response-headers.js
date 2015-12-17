/**
 * Created by parrikaa on 25/11/15.
 */


/**
 * Set the Headers for CORS and the rest
 * @param req
 * @param res
 * @param next
 */
module.exports = function(req, res, next){

    req.reqStartTime = new Date();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD');

    next();
}