var express = require('express');

var app = express();

app.get('/', (req, res)=> res.send("hello, this is server!"));

var server = app.listen(4000, function(){
  console.log('server running...!');
});

app.use(express.static('public'));
