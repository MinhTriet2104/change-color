var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('background color', function(color){
    io.emit('background color', color);
  });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});