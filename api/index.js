var express = require('express');
var router = express.Router();

router.get('/login',(req, res, next) => {
    res.send("hi");
});

module.exports = router;
