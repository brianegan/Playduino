var sys = require('sys');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var sp = new SerialPort("/dev/cu.usbmodem621", { 
  parser: serialport.parsers.readline("\n")
});


sp.on("data", function (data) {
  sys.puts("CATS: "+data);
});
