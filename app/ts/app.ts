declare function require(name: string);
var express = require('express')
var app = express();

app.get("/", function(req,res){
    res.send('Hello World');
})