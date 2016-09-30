//modules
var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var nodemailer = require('nodemailer');
transporter = nodemailer.createTransport('smtps://scott.01091992%40gmail.com:01091992Abc!@smtp.gmail.com');

var app = express();

app.use(express.static(path.join(__dirname,'./client')));

app.use(bodyParser.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(6789, function(){
 console.log("listening on port 6789");
});
