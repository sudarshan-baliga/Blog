var express = require('express');
var router = express.Router();
var verifyToken = require('../lib/verifyToken');
var connection = require('../lib/db');


//add comment 
router.post('/writecomment', verifyToken, (req, res, next) => {
    //get the number of comments to create the comment  id
    let query = "SELECT MAX(cid) as commentNum FROM comments";
    let commentNum = 0;
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.status(500).send({
                status: "FAILURE",
                message: "not able to get the number of comments"
            });
            throw error;
        };
        commentNum = results[0].commentNum + 1;
        //insert the post
        query = "INSERT INTO comments VALUES(" + commentNum + "," + req.body.pid + ",'" + req.userName + "','" + req.body.content + "', NOW());";
        console.log(query);
        connection.query(query, function (error, results, fields) {
            if (error) {
                res.status(500).send({
                    message: "not able to insert into comments table"
                });
                throw error;
            };
            console.log("comment inserted successfully");
            //get that comment and send it back
            query = "SELECT * FROM comments where cid = " + commentNum + ";";
            connection.query(query, function (error, results, fields) {
                if (error) {
                    res.status(500).send({
                        message: "not able to get the inserted comment"
                    });
                    throw error;
                };
                res.status(201).send({
                    message: "comment inserted successfully",
                    comment: results[0]
                });
            });
        });
    });
});

//get all the comments
router.post('/getAllComments', verifyToken, function (req, res, next) {
    let query = "SELECT *  FROM comments where pid = " + connection.escape(req.body.pid) + ";";
    connection.query(query, function (error, results, fields) {
        if (error) {
            res.status(500).send({
                status: "FAILURE",
                message: "not able to get the comments"
            });
            throw error;
        };
        res.status(200).send({
            status: "SUCCESS",
            message: "comments retrieved succesfully",
            comments: results,
        });
    });
});


module.exports = router;