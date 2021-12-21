const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = 80;

app.use(express.static(__dirname + '/../front/build/'));

app.get('/:path', (req, res, next) => {
  let path = req.params.path;
  res.redirect('/#/' + path);
});

io.on('connection', (socket) => {
  console.log('Socket Io Connect!!');

  socket.on('msg', (msg) => {
    io.emit('msg', msg);
    console.log('msg : ' + msg);
  });

  socket.on('disconnect', () => {
    console.log('Socket Io Disconnect!!');
  });
});

server.listen(port, () => {
  console.log('Server Start!!');
  console.log('URL: localhost:' + port);
})