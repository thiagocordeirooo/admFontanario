var express = require('express');
var app = express();
var fs = require('fs');

app.use('/bower_components', express.static('bower_components'));
app.use('/app', express.static('app'));

app.get('/', function (req, res) {    
  res.end(fs.readFileSync('index.html'));
});

app.listen(4000, function () {
  console.log('Running in port 4000!'); 
});