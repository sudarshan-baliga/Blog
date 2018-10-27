var express = require('express');
var router = express.Router();
var verifyToken = require('../lib/verifyToken');
var connection = require('../lib/db');


//handle writePost
router.post('/writePost', verifyToken, (req, res, next) => {
    //get the number of posts to create the post num
    let query = "SELECT COUNT(*) as postNum FROM posts";
    let postNum = 0;
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.status(500).send({
                status: "FAILURE",
                message: "not able to get the number of posts"
            });
            throw error;
        };
        postNum = results[0].postNum + 1;
        //insert the post
        query = "INSERT INTO posts VALUES(" + postNum + ",'" + req.userName + "'," + req.body.cid + ",'" + req.body.title + "','" + req.body.description + "','" + req.body.content + "', NOW());";
        console.log(query);
        connection.query(query, function (error, results, fields) {
            if (error) {
                res.status(500).send({
                    status: "FAILURE",
                    message: "not able to insert into posts table"
                });
                throw error;
            };
            console.log("post inserted successfully");
            res.status(201).send({
                status: "SUCCESS",
                message: "post inserted successfully"
            });
        });
    });
});


//get all the posts by the user
router.post('/getAllUserPosts', verifyToken, function(req, res, next){
    let query = "SELECT user_name,pid,cid,title,description,time     FROM posts where user_name = '" + req.userName + "';";
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.status(500).send({
                status: "FAILURE",
                message: "not able to get the userPosts"
            });
            throw error;
        };
        res.status(200).send({
            status: "SUCCESS",
            message: "post retrieved succesfully",
            posts: results,
        });
    });
});

//get recent posts for home page

router.post('/getRecentPosts', verifyToken, function(req, res, next){
    let query = "SELECT user_name,pid,cid,title,description,time  FROM posts ;";
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.status(500).send({
                status: "FAILURE",
                message: "not able to get the recent posts"
            });
            throw error;
        };
        res.status(200).send({
            status: "SUCCESS",
            message: "recent posts retrieved succesfully",
            posts: results,
        });
    });
});



//get a single post
router.post('/getPost', verifyToken, function(req, res, next){
    let query = "SELECT * FROM posts where pid = " + req.body.pid + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.status(500).send({
                status: "FAILURE",
                message: "not able to get the post"
            });
            throw error;
        };
        res.status(200).send({
            status: "SUCCESS",
            message: "post retrieved succesfully",
            post: results[0],
        });
    });
});

module.exports = router;