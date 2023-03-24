import Blockly from "blockly";

// Create Block
const define_block = [
    {
        "type": "timesleep",
        "message0": "Time Sleep ( %1  )",
        "args0": [
            {
                "type": "field_number",
                "name": "NAME",
                "value": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 190,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "cleanup",
        "message0": "cleanup()",
        
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "gpiosetup",
        "message0": "GPIO.setup ( %1 , %2 )",
        "args0": [
            {
                "type": "input_value",
                "name": "NAME"
            },
            {
                "type": "field_dropdown",
                "name": "pinset",
                "options": [
                    [
                        "Input",
                        "GPIO.IN"
                    ],
                    [
                        "Output",
                        "GPIO.OUT"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 290,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "gpio_output",
        "lastDummyAlign0": "CENTRE",
        "message0": "GPIO.output (  %1 , %2 )",
        "args0": [
            {
                "type": "input_value",
                "name": "pin"
            },
            {
                "type": "input_value",
                "name": "state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 190,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "gpio_state",
        "message0": "GPIO. %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "setpin",
                "options": [
                    [
                        "HIGH",
                        "HIGH"
                    ],
                    [
                        "LOW",
                        "LOW"
                    ]
                ]
            }
        ],
        "output": null,
        "colour": 190,
        "tooltip": "",
        "helpUrl": ""
    },
    //turn_mactrix
    {
        "type": "turn_mactrix",
        "message0": "turn %1 %2 %3",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "show",
                "options": [
                    [
                        "red",
                        "R"
                    ],
                    [
                        "yellow",
                        "Y"
                    ],
                    [
                        "green",
                        "G"
                    ],
                    [
                        "all",
                        "all"
                    ]
                ]
            },
            {
                "type": "field_colour",
                "name": "NAME",
                "colour": "#66ff99"
            },
            {
                "type": "field_number",
                "name": "NAME",
                "value": 0
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
    },


    //block_setport
    {
        "type": "block_setport",
        "message0": "Set port :  %1 %2",
        "args0": [
            {
                "type": "field_number",
                "name": "port",
                "value": 3
            },
            {
                "type": "field_dropdown",
                "name": "pin",
                "options": [
                    [
                        "GPIO.INPUT",
                        "in"
                    ],
                    [
                        "GPIO.OUTPUT",
                        "out"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 190,
        "tooltip": "You can set port for raspberry pi in this block.",
        "helpUrl": ""
    },
    {
        "type": "timesleep",
        "message0": "Time Sleep ( %1  )",
        "args0": [
            {
                "type": "field_number",
                "name": "NAME",
                "value": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 190,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "gpio_input",
        "message0": "GPIO.input ( %1 )",
        "args0": [
            {
                "type": "field_number",
                "name": "pin",
                "value": 0,
                "min": 0
            }
        ],
        "output": null,
        "colour": 190,
        "tooltip": "",
        "helpUrl": ""
    },

]




/// Create Code 
Blockly.JavaScript['turn_mactrix'] = function (block) {
    var dropdown_show = block.getFieldValue('show');
    var colour_name = block.getFieldValue('NAME');
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.



    var code = 'const text = 0 \n';
    return code;
};

Blockly.JavaScript['block_setport'] = function (block) {
    var number_name = block.getFieldValue('port');
    var dropdown_pin = block.getFieldValue('pin');
    // TODO: Assemble JavaScript into code variable.
    var code = `const ports = [${number_name},"${dropdown_pin}"]\n`;
    return code;
};

//time.sleep()
Blockly.Python['timesleep'] = function (block) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = `time.sleep(${number_name})\n`;
    return code;
};


//GPIO.cleanup()
Blockly.Python['cleanup'] = function (block) {

    // TODO: Assemble Python into code variable.
    var code = `GPIO.cleanup()\n`;
    return code;
};


//GPIO.setup([], []);

Blockly.Python['gpiosetup'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var dropdown_pinset = block.getFieldValue('pinset');
    // TODO: Assemble Python into code variable.
    var code = `GPIO.setup(${value_name}, ${dropdown_pinset})\n`;
    return code;
};


//GPIO.output([], [])
Blockly.Python['gpio_output'] = function (block) {
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value_state = Blockly.Python.valueToCode(block, 'state', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `GPIO.output(${value_pin}, ${value_state})\n`;
    return code;
};

//GPIO.HIGH
Blockly.Python['gpio_state'] = function (block) {
    var dropdown_setpin = block.getFieldValue('setpin');
    // TODO: Assemble Python into code variable.
    var code = `GPIO.${dropdown_setpin}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gpio_input'] = function (block) {
    var number_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    var code = `GPIO.input(${number_pin})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

//For add slot in this code.
export const BlocklyAddSLotComponent = () => {
    let content = [

        {
            kind: 'BLOCK',
            type: 'timesleep',
        }, {
            kind: 'BLOCK',
            type: 'gpiosetup',
        }, {
            kind: 'BLOCK',
            type: 'gpio_output',
        }, {
            kind: 'BLOCK',
            type: 'gpio_state',
        }, {
            kind: 'BLOCK',
            type: 'gpio_input',
        }, {
            kind: 'BLOCK',
            type: 'cleanup',
        }
       
    ]


    return content;
}


Blockly.defineBlocksWithJsonArray(define_block);


export default define_block;