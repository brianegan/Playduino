var sys = require('sys'),
    app = require('express').createServer(),
    io = require('socket.io').listen(app),
    serialport = require("serialport"),
    SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/cu.usbmodem621", { 
  parser: serialport.parsers.readline("\n")
});

// sp.on("data", function (data) {
//   sys.puts("CATS: "+data);
// });

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
  sp.on("data", function (data) {
    socket.emit('sp', data);
  });
});

app.listen(3000);
