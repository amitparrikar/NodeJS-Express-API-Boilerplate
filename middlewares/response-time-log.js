/**
 * Created by parrikaa on 26/11/15.
 */


module.exports = function(req, res, next){

    req.reqStartTime = new Date();

    /**
     * res.end() function is overwriten to log the response time.
     * The rest of the function we call as it is
     */
    res.end = (function(req, res){

        var oldEndFunction = res.end;

        return function(){
            var stop;

            //Call the old response end function
            oldEndFunction.apply(res, arguments);
            stop = new Date();

            LOGGER.debug(req.method + ' ' + req.path + ' took ' + (stop - req.reqStartTime) + ' ms ' + res.statusCode, {'status': res.statusCode});
        }

    })(req, res);

    next();
}
