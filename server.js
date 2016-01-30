var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.json({"Helloii":"World"});
});

app.listen(process.env.PORT||8080);
