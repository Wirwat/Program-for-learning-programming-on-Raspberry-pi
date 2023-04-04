var express = require('express');
var router = express.Router();
const fs = require('fs');

const { PythonShell } = require('python-shell')
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




router.post('/run', (req, res, next) => {
    const state = req.body.state;
    const fs = require('fs');
    if (state) {
        PythonShell.run('blockly_code/debug.py', null, function (err) {
            if (err) throw err;
            console.log('debug');
        });
        res.send("debug")
    } else {
        try {
            fs.writeFileSync(`${__dirname}/../blockly_code/debug.py`, content);
            // file written successfully
        } catch (err) {
            console.error(err);
        }

        PythonShell.run('blockly_code/debug.py', null, function (err) {
            if (err) throw err;
            console.log('release_debug');
        });
        res.send("release_debug")
    }
});
router.post('/run', (req, res, next) => {


    res.send("debug")

});

/*  
 const content = `import RPi.GPIO as GPIO
    \nimport time
    \nGPIO.setmode(GPIO.BCM)
    \n
    \n${req.body.text_code}`;

*/
router.post('/debug', (req, res, next) => {
    const fs = require('fs');

    let interup = "\n  res = requests.get('http://localhost:3030/service/')\n  if (res.text != 'true'):\n    time.sleep(0.1)\n    GPIO.cleanup()\n    break"


    const myArray = req.body.text_code.split('\n');
    for (let r in myArray) {
        if (myArray[r].includes("while") || myArray[r].includes("for")) {

            myArray.splice(r + 1, 0, interup);
        }
    };
    console.log(req.body.text_code)
    const content = `
    \nfrom module import *
    \n
    \n
    \n${myArray.join('\n')}
    `;



    try {
        fs.writeFileSync(`${__dirname}/../blockly_code/debug.py`, content);

    } catch (err) {
        console.error(err);
    }

    res.send(content)
});



module.exports = router;




