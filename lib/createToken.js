var config = require('./config');
var jwt = require('jsonwebtoken');


function create(username, pasword) {
  var token = jwt.sign({ user_name: username, password: pasword }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  });
  return token;
}

module.exports = create;




