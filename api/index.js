var express = require('express');
var router = express.Router();
var posts = require('./posts.js');
var handleUser = require('./handleUser');
var comments = require('./comments');


router.use("/posts", posts);
router.use('/handleuser', handleUser);
router.use('/comments', comments);


module.exports = router;
