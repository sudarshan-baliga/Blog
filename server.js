var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var api = require("./api");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", api);

app.listen(process.env.PORT || 3001, () => {
    console.log("listening to port 3001");
});