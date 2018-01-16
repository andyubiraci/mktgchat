var express= require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.status(200).send("MKTG Chat...!");
})

io.on('connection', function(socket) {
    console.log('Alguien en Sockets');
})

server.listen(8080, function(){
    console.log("corriendo!");
})