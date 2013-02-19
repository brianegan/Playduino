# Playduino

A simple repo showing the power & fun of combining Arduino with NodeJS!

## Setup

### Grab this code

The first setup is to grab this repo & install all necessary node modules!

	# Clone the repo
	git clone git://github.com/brianegan/Playduino.git
	
	# Enter the directory
	cd Playduino
	
	# Install necessary node modules
    npm install

### Arduino Code

Second, you'll need to upload some code to your Arduino.

  1. Download & Run the [Arduino Software](http://arduino.cc/en/main/software "Arduino Software")
  1. Click on Tools > Serial Port
  1. Note the Serial Port (USB Port) your Arduino is connected to. You'll need this for later!
  1. Open up "AnalogReadSerial.ino" from this repo
  1. Upload AnalogReadSerial.ino to your Arduino
    
### Modify socketio.js

  1. Finally, open up socketio.js from this repo in your favorite editor.
  1. Change line 19 in the file:
  
	var sp = new SerialPort(*"/dev/cu.usbmodem1411"…*
	
	Replace "/dev/cu.usbmodem1411" with the serial port your modem is hooked into	

## Run & Play (the fun part)!

	# Run a terminal output of Arduiono Data
	node socketio.js
	
	# Open up your web browser to port 3000
	# Play with your potentiometer and see the box move all around! 
	
	
	
	
	
	



