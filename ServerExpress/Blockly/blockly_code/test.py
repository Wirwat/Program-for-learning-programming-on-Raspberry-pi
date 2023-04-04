# code
import sys
import requests
import time

# bs4 module for web scraping and requests for making HTTPS requests using Python.
#response = requests.get('https://leetcode.com / shubhamk314')

try:
    while True:
        res = requests.get('http://localhost:3030/service/')  #
        if (res.text != 'true'):  #
            time.sleep(0.1) #
            break #
        time.sleep(1)
        print(res.text)
        

except:
    print("interrupted")
