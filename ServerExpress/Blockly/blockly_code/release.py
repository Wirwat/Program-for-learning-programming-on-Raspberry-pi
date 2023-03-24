import RPi.GPIO as GPIO
    
GPIO.setmode(GPIO.BCM)
    

    
GPIO.setup(25, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.setup(21, GPIO.OUT)
GPIO.cleanup()