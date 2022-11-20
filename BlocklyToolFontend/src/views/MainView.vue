<template>

    <div class="m-2" id="SwitchMobile">
        <button @click="mobile_switch = !mobile_switch" class="btn btn-secondary" type="button" style="width: 100%;">
            Switch
            <i class="bi bi-switch"></i>
        </button>
    </div>



    <div id="code" v-if="mode" :style="Mobile_Code">

        <div class="container p-3 mx-3 class">

            {{ CodeText }}
        </div>


    </div>



    <div id="StateDisplay" v-else="mode">

        <PortState_com> </PortState_com>

    </div>



    <BlocklyComponent id="blockly" :style="Mobile" :options="options" ref="foo"></BlocklyComponent>




    <div class="button_layout" :style="Mobile_Code">


        <button @click="chang_mode()" class="btn btn-outline-info ">{{ Mode_state }} <i class="bi bi-filetype-py"></i>
        </button>
        <button @click="Debug()" class="btn btn-warning " style="margin-left: 16%!important;">Debug Code <i
                class="bi bi-code-square"></i> </button>
        <button @click="runState()" class="btn btn-success m-1" id="bt_run"><i :class="Run_state"></i></button>


    </div>

</template>

<script setup>
import { ref } from "vue";
import BlocklyComponent from '../components/BlocklyComponent.vue';

import StateCompoment from "../components/StateCompoment.vue";
import PortState_com from "../components/PortState_com.vue";

import api from '../config_api.js'

const foo = ref();

</script>

<script>

import BlocklyPython from "blockly/python";


import axios from 'axios'
export default {
    data() {
        return {
            Run_state: "bi bi-play",
            myjson: null,
            Mode_state: "Mode",
            mode: true,
            code: "",
            ipa: window.location.host,
            mobile_switch: false

        }
    },
    computed: {

        Mobile_Code() {

            if (this.mobile_switch) {
                return "display:block;"

            }

        },
        Mobile() {

            if (this.mobile_switch) {

                return "display:none"
            }

        },


        CodeText() {
            console.log(this.code)
            let text = this.code.split(" ");

            var elem =
                document.createElement("h1");

            elem.inertText = text[0];
            text[0] = elem.inertText

            const te = text.join(' ')

            return te;
        }

    },
    mounted() {

        this.$refs.foo.workspace.addChangeListener(this.onEvent);
    },
    methods: {
        onEvent(event) {
            //console.log(event.type);
            if (event.type == "move" || event.type == "delete" || event.type == "change") {
                BlocklyPython.addReservedWords('code');
                this.code = BlocklyPython.workspaceToCode(this.$refs.foo.workspace);
                console.log(this.code)
                try {

                    eval(this.code);
                } catch (e) {
                    //alert(e);
                }
            }
        },
        runState() {
            const headers = {
                "Authorization": "Bearer my-token",
                "My-Custom-Header": "foobar"
            };
            let state = "";
            if (this.Run_state == "bi bi-play") {
                state = { state: true };



                this.Run_state = "bi bi-stop"
            } else {
                state = { state: false };
                this.Run_state = "bi bi-play"
            }
            const anothrP = "localhost:3000"
            axios.post(`http://${this.ipa}/led/run`, state, { headers })
                .then(response => {
                    console.log(response.data)

                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });;
        },
        Debug() {
            const code = { text_code: this.code };
            const headers = {
                "Authorization": "Bearer my-token",
                "My-Custom-Header": "foobar"
            };
            let fack = "localhost:3000"
            axios.post(`http://${this.ipa}/led/debug`, code, { headers })
                .then(response => {
                    console.log(response.data)
                    // this.articleId = response.data.id 
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });;

        },
        chang_mode() {
            this.mode = !this.mode;
            if (this.mode) {
                this.Mode_state = "Code";
            } else {
                this.Mode_state = "Mode";
            }

        }

    },

    // `mounted` is a lifecycle hook which we will explain later

}
</script>
<style scoped>
#StateDisplay {

    position: absolute;
    left: 0;
    width: 38.5%;
    height: 70%;

    margin: 10px;
    margin-top: 50px;



    overflow: scroll;
    overflow-x: hidden;
}

.bt_run {
    background-color: coral;
    border-color: coral;
}

.bt_mode {
    background-color: rgb(80, 106, 255);

    color: aliceblue;
    border-color: rgb(80, 106, 255);

}

.class {
    white-space: pre;
    margin: 10px 10px;
    font-size: 16px;
}

.class h1 {
    color: red
}

.button_layout {
    margin-top: 2px;
    margin-left: 2%;

    width: 100%;
}

#blockly {
    position: absolute;
    right: 0;
    width: 60%;
    height: 90%;
    margin-right: 10px;
    margin-top: 10px;
}



#code {
    position: absolute;
    left: 0;
    width: 38.5%;
    height: 70%;
    background-color: rgb(231, 231, 231);
    margin: 10px;
    margin-top: 50px;
    border: solid;
    border-width: 10px;
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.2);
    overflow: scroll;
    overflow-x: hidden;
}

#SwitchMobile {

    display: none;
}

@media only screen and (max-width: 1311px) {

    #SwitchMobile {

        display: block;
    }


    #blockly {
        width: 100%;
        height: 60%;

    }

    .button_layout {

        margin: 0;
        padding: 0 0 0 0;
        margin-bottom: 1px;
        display: none;
    }

    #code {
        overflow: scroll;
        overflow-x: hidden;
        display: none;
        overflow: scroll;
        overflow-x: hidden;
    }

}


@media only screen and (max-width: 1200px) {

    #SwitchMobile {

        display: block;
    }


    #blockly {
        width: 100%;
        height: 80%;

    }

    .button_layout {
        margin: 0;
        padding: 0 0 0 0;
        margin-bottom: 1px;
        display: none;

    }

    #code {
        width: 97%;
        padding-bottom: 50%;
        position: static;
        display: none;
        overflow: scroll;
        overflow-x: hidden;
    }

}
</style>
