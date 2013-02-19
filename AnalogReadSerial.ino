/*
  Analog Input
 
  Reads analog input, writes to serial
 
 */

int sensorPin = A0;    // select the input pin for the potentiometer

void setup() {
 // nothing needed in the setup
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);    
  Serial.println(sensorValue);       
}
