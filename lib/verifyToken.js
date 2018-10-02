var jwt = require('jsonwebtoken');
var config = require('./config');
let hash = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJzdWRhcnNoYW4iLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE1Mzg0NjA3NDMsImV4cCI6MTUzODU0NzE0M30.jXW8QFBbuCTAbI2iiRqMrH9iGuhoQlpvKwH5iqVwhXg';
jwt.verify(hash,config.secret, function(err, decoded){
    if (err) throw err;
    console.log(decoded)
})