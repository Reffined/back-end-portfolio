import { WebSocketServer, type Server , type WebSocket } from "ws";



const server = new WebSocketServer({
    port: 8080,
})

let sockets : Array<WebSocket> = [];
server.on('connection', function(socket) {
  sockets.push(socket);
    socket.send("hello client")
  // When you receive a message, send that message to every socket.
  socket.on('message', function(msg) {
    sockets.forEach(s => s.send(msg));
  });

  // When a socket closes, or disconnects, remove it from the array.
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
  });
});