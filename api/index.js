var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require("../lib/config.js");
var createToken = require('../lib/createToken');
var verifyToken = require('../lib/verifyToken');
// connect to mysql
var connection = mysql.createConnection({
  host: 'localhost',
  user: config.mySqlUser,
  password: config.mySqlPass,
  database: config.mySqlDb
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to mysql as id ' + connection.threadId);
});

//handle signin
router.post('/signin', (req, res, next) => {
  let query = 'SELECT * from Users where user_name = \'' + req.body.userName + '\' AND hash = \'' + req.body.password + '\';';
  console.log('signin request recieved from ', req.body)
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    // if user exists send data
    if (results.length > 0) {
      //create jwt token
      var token = createToken(req.body.userName, req.body.password);
      res.send({
        auth: 'True',
        userData: results[0],
        jwt: token
      });
    } else
      res.send({
        auth: 'False',
        message: 'Please enter correct user name and password',
        userData: []
      });
  });
});

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
    query = "INSERT INTO posts VALUES(" + postNum + ",'" + req.userName + "'," + 201 + ",'" + req.body.title + "','" + req.body.description + "','" + req.body.content + "', NOW());" ;
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
module.exports = router;