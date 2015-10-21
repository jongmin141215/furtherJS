var express = require('express');
var app = express();
var root = __dirname;
var port = process.env.PORT || 8080;
app.use(express.static(root + '/public/javascripts'));
app.use(express.static(root));
app.get('/', function(req, res) {
  res.sendFile(root + '/index.html');
})

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
