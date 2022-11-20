<script setup>


</script>
    
    <template >
    <div class="row container " >

        <div id="simulationContentDiv" class="content rightContent" >
            <div id="pinsDiv" class="rightContentTop">
                <table id="pinoutTable">
                    <tbody>
                        <tr>
                            <th class="noborder">BCM</th>
                            <th class="noborder">Altern</th>
                            <th class="noborder" colspan="2">Header</th>
                            <th class="noborder">Altern</th>
                            <th class="noborder">BCM</th>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span style="color: #ff0000;">3.3v</span></td>
                            <th id="pin1" class="bg-success">1</th>
                            <th id="pin2">2</th>
                            <td align="center"><span class="pinVolt">5v</span></td>
                            <td align="center">-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><span class="piI2c">SDA</span></td>
                            <th id="pin3">3</th>
                            <th id="pin4">4</th>
                            <td><span class="pinVolt">5v</span></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><span class="piI2c">SCL</span></td>
                            <th id="pin5">5</th>
                            <th id="pin6">6</th>
                            <td><span class="pinGround">0v</span></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><span class="piGpio">GPCLK0</span></td>
                            <th id="pin7">7</th>
                            <th id="pin8">8</th>
                            <td><span style="color: #ffff00;">TxD</span></td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span class="pinGround">0v</span></td>
                            <th id="pin9">9</th>
                            <th id="pin10">10</th>
                            <td><span style="color: #ffff00;">RxD</span></td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td><span class="piGpio">-</span></td>
                            <th id="pin11">11</th>
                            <th id="pin12">12</th>
                            <td><span class="piGpio">PWM0</span></td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td><span class="piGpio">-</span></td>
                            <th id="pin13">13</th>
                            <th id="pin14">14</th>
                            <td><span class="pinGround">0v</span></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td><span class="piGpio">-</span></td>
                            <th id="pin15">15</th>
                            <th id="pin16">16</th>
                            <td><span class="piGpio">-</span></td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span style="color: #ff0000;">3.3v</span></td>
                            <th id="pin17">17</th>
                            <th id="pin18">18</th>
                            <td><span class="piGpio">-</span></td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><span class="piSpi">MOSI</span></td>
                            <th id="pin19">19</th>
                            <th id="pin20">20</th>
                            <td><span class="pinGround">0v</span></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><span class="piSpi">MISO</span></td>
                            <th id="pin21">21</th>
                            <th id="pin22">22</th>
                            <td><span class="piGpio">-</span></td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td><span class="piSpi">SCLK</span></td>
                            <th id="pin23">23</th>
                            <th id="pin24">24</th>
                            <td><span class="piSpi">CE0</span></td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td><span class="pinGround">0v</span></td>
                            <th id="pin25">25</th>
                            <th id="pin26">26</th>
                            <td><span class="piSpi">CE1</span></td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <th class="noborder">BCM</th>
                            <th class="noborder">Altern</th>
                            <th class="noborder" colspan="2">Header</th>
                            <th class="noborder">Altern</th>
                            <th class="noborder">BCM</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        </div>


    </div>
</template>


<style scoped>




pre {
    margin: 0;
    padding: 8px;
}

/* Content */
.content {
    height: 480px;
    padding: 0;
    margin: 0;
}


/* GPIO table */
#pinoutTable {
    margin-top: 1%;
    margin-left: 16%;
}

#pinoutTable td,
th {
    padding: 0px 8px 0px 8px;
    text-align: center;
    font-size: 20px
}

#pinoutTable th {
    border: 1px solid black;
}

#pinoutTable .noborder {
    border: none;
}

.pinVolt {
    color: #ff6600;
}

.pinGround {
    color: #000000;
}

.piI2c {
    color: #33cccc;
}

.piGpio {
    color: #008000;
}

.piSpi {
    color: #800080;
}

/* GPIO states */
.pinDefault {
    background-color: rgb(117, 43, 43);
    color: black;
}

.pinDigitalHigh {
    background-color: red;
    color: black;
}

.pinDigitalLow {
    background-color: black;
    color: white;
}

/* Other */
#modeExecution {
    display: none;
}
</style>