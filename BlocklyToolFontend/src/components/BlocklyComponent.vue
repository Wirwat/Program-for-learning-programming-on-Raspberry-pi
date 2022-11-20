<script setup>
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blockly Vue Component.
 * @author dcoodien@gmail.com (Dylan Coodien)
 */
import { onMounted, ref, shallowRef } from "vue";
import Blockly from "blockly";
import tools from '../blocks/blocks.js';


import {  } from '../blocks/define_block.js'


import theme_led from "../blocks/theme/theme_led";
const props = defineProps(["options"]);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

defineExpose({ workspace });

const options = {
    toolbox: tools,
    theme: theme_led,
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: true,
    toolboxPosition: 'end',
    css: true,
    media: 'https://blockly-demo.appspot.com/static/media/',
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,

    zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    }
}

onMounted(() => {
    if (!options.toolbox) {
        options.toolbox = blocklyToolbox.value;
    }
    workspace.value = Blockly.inject(blocklyDiv.value, options);

});


</script>

<template>
    <div>
        <div id="blocklyDiv" class="blocklyDiv" ref="blocklyDiv"></div>
        <xml ref="blocklyToolbox" style="display: none">
            <slot></slot>
        </xml>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
    height: 100%;
    width: 100%;
    text-align: left;

}
</style>
