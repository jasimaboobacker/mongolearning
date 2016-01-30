var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.json({"Hello":"World"});
});

app.listen(process.env.port||8080);