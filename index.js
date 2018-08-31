const express   = require('express'),
      app       = express(),
      http      = require('http'),
    //   WebSocket = require('ws'),
      getParam  = require("./util/common"),
      port      = getParam("port", 4000),
      server    = http.createServer(app),
      io = require('socket.io')(server);
    //   wss       = new WebSocket.Server({ server });

app.use(express.static(__dirname))

io.on('connection', function (socket) {
    // socket.emit('news', { hello: 'world' });

    // socket.broadcast.emit('message');
    socket.on('message', function (data) {
        io.emit('message', data);
    });
});

// wss.on('connection', ws => {

//     ws.on('message', (message) => {
//         ws.send(message);
//         wss.clients.forEach(client => {
//             if (client != ws) {
//                 client.send(message);
//             }    
//         });
        
//     });
    
// });

server.listen(port, () => {
    console.log(`Server started on port ${port} :)`);
});