var config = require('./config');
var jwt = require('jsonwebtoken');

var token = jwt.sign({ user_name:'sudarshan', password:'1234' }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  });



console.log(token);