/*
    _____                               
   (, /   ) /)          /)     ,        
    _/__ / // _       _(/       __   ___
    /     (/_(_(_(_/_(_(_(_(__(_/ (_(_) 
 ) /            .-/                     
(_/            (_/                      

*/

// set up the essesntials
var sys = require('util'),
    app = require('express').createServer(),
    io = require('socket.io').listen(app),
    serialport = require("serialport"),
    SerialPort = serialport.SerialPort;

// set up a new serial port, locate the Arduino plugged in via USB
var sp = new SerialPort("/dev/cu.usbmodem1411", { 
  parser: serialport.parsers.readline("\n")
});

// start in the root, and find the html file we're using
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// emit the analogue data value each time it receives
io.sockets.on('connection', function (socket) {
  sp.on("data", function (data) {
    socket.emit('sp', data);
  });
});

// use port 3000
app.listen(3000);
