
    
from module import *
    

    

    
while True:

  res = requests.get('http://localhost:3030/service/')
  if (res.text != 'true'):
    time.sleep(0.1)
    GPIO.cleanup()
    break
  if((sensor.distance*100) <= 10):
    buzzer.on()
    time.sleep(1)
    buzzer.off()
    GPIO.output(18,(GPIO.LOW))
    GPIO.output(29,(GPIO.LOW))
    GPIO.output(31,(GPIO.LOW))
  if((sensor.distance*100) >= 10):
    GPIO.output(18,(GPIO.HIGH))
    GPIO.output(29,(GPIO.HIGH))
    GPIO.output(31,(GPIO.HIGH))
  if GPIO.input(36) == GPIO.LOW:
    GPIO.output(13,(GPIO.LOW))
    GPIO.output(15,(GPIO.LOW))
    GPIO.output(16,(GPIO.LOW))
    Dot_Matrix("aaa")
  if GPIO.input(38) == GPIO.LOW:
    GPIO.output(13,(GPIO.HIGH))
    GPIO.output(15,(GPIO.HIGH))
    GPIO.output(16,(GPIO.HIGH))
    Dot_Matrix("bbb")

    