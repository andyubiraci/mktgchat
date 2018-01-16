var express= require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.status(200).send("MKTG Chat...!");
})

server.listen(port, function(){
    console.log("corriendo!");
})