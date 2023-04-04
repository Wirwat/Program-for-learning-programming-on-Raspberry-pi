import sys
import time
import requests
from gpiozero import Buzzer,DistanceSensor
import RPi.GPIO as GPIO

import argparse
import re
from luma.led_matrix.device import max7219
from luma.core.interface.serial import spi, noop
from luma.core.render import canvas
from luma.core.virtual import viewport
from luma.core.legacy import text, show_message
from luma.core.legacy.font import proportional, CP437_FONT, TINY_FONT, SINCLAIR_FONT, LCD_FONT


GPIO.setmode(GPIO.BOARD)
led_pins = [13, 15, 16, 18, 29, 31, 35, 37]

button_pins = [36, 38, 40]


# Set up DistanceSensor and Buzzer
sensor = DistanceSensor(echo=17, trigger=4)
print(sensor.distance*100) 
buzzer = Buzzer(25)


# Set up GPIO

GPIO.setup(led_pins, GPIO.OUT, initial=GPIO.HIGH)

GPIO.setup(button_pins, GPIO.IN, pull_up_down=GPIO.PUD_UP)


parser = argparse.ArgumentParser(description='matrix_demo arguments',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)

parser.add_argument('--cascaded', '-n', type=int, default=1, help='Number of cascaded MAX7219 LED matrices')
parser.add_argument('--block-orientation', type=int, default=0, choices=[0, 90, -90], help='Corrects block orientation when wired vertically')
parser.add_argument('--rotate', type=int, default=0, choices=[0, 1, 2, 3], help='Rotate display 0=0°, 1=90°, 2=180°, 3=270°')

args = parser.parse_args()


def Dot_Matrix( msg ):
    # create matrix device
    serial = spi(port=0, device=0, gpio=noop())
    device = max7219(serial, cascaded=args.cascaded or 1, block_orientation=args.block_orientation, rotate=args.rotate or 0)
    print("Created device")
    show_message(device, msg, fill="white", font=proportional(LCD_FONT), scroll_delay=0.2)
    
