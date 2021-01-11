var express = require('express');
var request = require('request');
var fs = require('fs');


var app = express();

var url = __dirname + "\\ajaxex1-1.html";

app.get("/",function(req,res){
    res.send("\'현재 주소/ex숫자\' 형태로 접속해주세요. ex) 현재주소/ex1");
})

app.get("/ex1",function(req,res){
    request.get(url).on('response',function(res){
        console.log(res.statusCode)
        console.log(res.headers['content-type'])
    })
    res.sendFile(__dirname + "\\ajaxex1.html");
});

app.listen(3000, function(){
    console.log("my webserver start");
});