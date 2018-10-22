var mysql = require('mysql');
var config = require("./config.js");

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

module.exports = connection;
