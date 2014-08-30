/*
 * Simple Socket.io Setup
 *
 * @type {exports}
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on('event:new:image',function(data){
        socket.broadcast.emit('event:incoming:image',data);
    });
});

server.listen(8000,function(){
    console.log('Socket.io Running');
});