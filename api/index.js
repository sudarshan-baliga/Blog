var express = require('express');
var router = express.Router();
var posts = require('./posts.js');
var handleUser = require('./handleUser');


router.use("/posts", posts);
router.use('/handleuser', handleUser);


module.exports = router;