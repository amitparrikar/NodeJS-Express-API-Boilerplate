/**
 * Created by parrikaa on 25/11/15.
 */

/**
 *
 * Express error handling functionality
 *
 * @param app
 */
module.exports = function(app){

    app.use(function(req, res, next){
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next){
        var status = err.status || 500;
        var message = err.message || 'Internal Server Error';
        res.status(status).send({status: status, message: message});
    });

}
