var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require("../lib/config.js");

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
  console.log('signin request recieved from ' , req.body)
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    // if user exists send data
    if (results.length > 0)
      res.send({ auth: 'True', userData: results[0] });
    else
      res.send({ auth: 'False', message: 'Please enter correct user name and password', userData: [] });
  });
});

//handle writePost
router.post('/writePost', (req, res, next) => {
  console.log(req.body,'uu');
})

module.exports = router;
