var express = require('express');
var router = express.Router();

var MessageSchema = require('../app/schemas/message');

var msg;



/* GET home page. */
router.get('/', function(req, res, next) {


    MessageSchema.findOne().exec(function (err,data){
        msg = data.message;
    });

    res.render('index', { title: 'Express' , message:msg });
    next();
});

module.exports = router;
