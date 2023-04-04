const e = require('express');
var express = require('express');
var api = express.Router();
const fs = require('fs');

const { PythonShell } = require('python-shell')

let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'blockly_code', //If you are having python_test.py script in same folder, then it's optional.
    args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
};
/* GET users listing. */
let t = false;
let i = 0;
test = () => {
    i += 1
    console.log(i)
    return  t
}

api.get('/', function (req, res, next) {
    let param = test()
    

    
    res.send(param);


});
//start - stop
api.get('/s/:tool', function (req, res, next) {
    t = req.params.tool;

    if (t) {
        PythonShell.run('blockly_code/debug.py', null, function (err) {
            if (err) throw err;
            i = 0;
            console.log('debug');
        });
    }
    res.send(t)
    next
});






api.get('/test', (req, res, next) => {
    PythonShell.run('test.py', options, function (err, result) {
        if (err) throw err;
        console.log('result: ', result);
        res.send(result.toString())
    });
});




module.exports = api;


