/*
    _____                               
   (, /   ) /)          /)     ,        
    _/__ / // _       _(/       __   ___
    /     (/_(_(_(_/_(_(_(_(__(_/ (_(_) 
 ) /            .-/                     
(_/            (_/                      

*/

/* 
**
this file not necessary, but a good way to test 
that the Arduino is talking to the serial port properly 
run it via node after connecting our Arduino
**
*/

var sys = require('util');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var sp = new SerialPort("/dev/cu.usbmodem1411", { 
  parser: serialport.parsers.readline("\n")
});


sp.on("data", function (data) {
  sys.puts("CATS: "+data);
});