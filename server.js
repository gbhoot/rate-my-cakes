var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/routes.js')(app);

app.listen(8000);