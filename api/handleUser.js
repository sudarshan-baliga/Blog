var express = require('express');
var router = express.Router();
var verifyToken = require('../lib/verifyToken');
var connection = require('../lib/db');
var createToken = require('../lib/createToken');


//handle signin
router.post('/signin', (req, res, next) => {
  let query = "SELECT * from Users where user_name = " + connection.escape(req.body.userName) + " AND hash = " + connection.escape(req.body.password) + ";";
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

//handle signup
router.post('/signup', (req, res, next) => {
  let query = "INSERT INTO Users VALUES("
    + connection.escape(req.body.userName) +
    "," + connection.escape(req.body.password) +
    "," + connection.escape(req.body.fname) +
    "," + connection.escape(req.body.lname) +
    "," + connection.escape(req.body.about) + ");";
  console.log(query);
  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
      res.status(500).send({
        auth: 'False',
        message: 'There was a problem',
        userData: []
      });
    }
    var token = createToken(req.body.userName, req.body.password);
    res.status(201).send({
      auth: 'True',
      userData: results[0],
      jwt: token
    });
  });
});

//handle getuser
router.post('/getuserprofile', (req, res, next) => {
  let query = "SELECT * from Users where user_name = '" + req.body.profileName + "';";
  console.log('profile request recieved from ', req.body)
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    // if user exists send data
    console.log(results, query, req.body);
    if (results.length > 0) {
      res.status(200).send({
        profileData: results[0],
        message: 'profile found'
      });
    } else
      res.status(404).send({
        message: 'profile not found',
        profileData: []
      });
  });
});

module.exports = router;