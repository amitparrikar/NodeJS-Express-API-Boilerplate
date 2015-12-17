/**
 * Created by Amit on 22/11/15.
 */

var express = require('express'),
    router = express.Router();

/**
 * Configure all the routes here
 */
router.use(require('./common'));
router.use('/users', require('./users'));








module.exports = router;