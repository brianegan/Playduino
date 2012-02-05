var arduino = require('duino'),
    board = new arduino.Board({
      debug: true
    });

var led = new arduino.Led({
  board: board,
  pin: 13
});

board.on('data', function(m) {
  console.log(m);
});

led.blink();
