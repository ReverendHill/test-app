var express = require('express');
var app = express();
//let port = (process.env.PORT || 3000)
let port = (40000)
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}! YAY! ${port}`);
});