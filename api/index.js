var express = require('express');
var router = express.Router();
var verifyToken = require('../lib/verifyToken');
var posts = require('./posts.js');
var handleUser = require('./handleUser');
var connection = require('../lib/db');


router.use("/posts", posts);
router.use('/handleUser', handleUser);


module.exports = router;