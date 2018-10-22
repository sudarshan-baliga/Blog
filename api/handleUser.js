var express = require('express');
var router = express.Router();
var verifyToken = require('../lib/verifyToken');
var connection = require('../lib/db');
var createToken = require('../lib/createToken');


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

module.exports = router;