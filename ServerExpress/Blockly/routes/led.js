var express = require('express');
var router = express.Router();
const fs = require('fs');

let {PythonShell} = require('python-shell')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Led service for Blockly');
});

router.post('/code_export', (req, res, next) => {
    if (req.body.text_code != "") {
        console.log(req.body.text_code)
        let port = '';
        let outin = '';
        let text = `port = ports[0];
                outin = ports[1];  
    `
        let n = `${req.body.text_code} ${text}`
        eval(n);
        console.log(outin)
        console.log(port)
        res.send('raspberry_pi_on');
    } else {
        res.send("null");
    }
});


let pyshell = new PythonShell('blockly_code/debug.py');


router.post('/run', (req, res, next) => {
    const state = req.body.state;
    if (state) {
      
       PythonShell.run('blockly_code/debug.py', null, function (err) {
      if (err) throw err;
        console.log('debug');
          });
        res.send("debug")


    } else {
      
        PythonShell.run('blockly_code/release.py', null, function (err) {
      if (err) throw err;
        console.log('release');
          });
      
        res.send("release")

        
    }

});




router.post('/debug', (req, res, next) => {
    const fs = require('fs');

    const content = `import RPi.GPIO as GPIO
    \nimport time
    \nGPIO.setmode(GPIO.BCM)
    \n
    \n${req.body.text_code}`;

    let release = `import RPi.GPIO as GPIO
    \nGPIO.setmode(GPIO.BCM)
    \n
    `;

    const myArray = req.body.text_code.split('\n');

    for (let r in myArray) {

        if (myArray[r].includes("GPIO.setup")) {
            release += `\n${myArray[r]}`

        }
    };


    release += `\nGPIO.cleanup()`
    console.log(release);
    try {
        fs.writeFileSync(`${__dirname}/../blockly_code/debug.py`, content);
        // file written successfully
        fs.writeFileSync(`${__dirname}/../blockly_code/release.py`, release);
    } catch (err) {
        console.error(err);
    }

    res.send(content)
});
module.exports = router;
