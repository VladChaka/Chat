const express  = require('express'),
      app      = express(),
      http     = require('http'),
      getParam = require("./util/common"),
      port     = getParam("port", 4000),
      server   = http.createServer(app),
      io       = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('message', function (data) {
        io.emit('message', data);
    });
});

server.listen(port, () => {
    console.log(`Server started on port ${port} :)`);
});