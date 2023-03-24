import RPi.GPIO as GPIO
    
import time
    
GPIO.setmode(GPIO.BCM)
    

    
GPIO.setup(25, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.setup(21, GPIO.OUT)
GPIO.output(16, (GPIO.HIGH))
time.sleep(5)
GPIO.output(16, (GPIO.LOW))
time.sleep(5)
GPIO.output(21, (GPIO.HIGH))
time.sleep(5)
GPIO.output(21, (GPIO.LOW))
GPIO.cleanup()
