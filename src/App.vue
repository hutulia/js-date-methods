<script setup>
import {convertFormattedDateToTimeStamp, isValidDateFormattedString} from "@lib/unix-timestamp-converter.js";
import {computed, reactive, ref} from "vue";

  const df = ref('1970-01-01T00:00:00+00:00');
  const methods = [
    'getFullYear',
    'getMonth',
    'getDate',
    'getHours',
    'getMinutes',
    'getSeconds',
    'getMilliseconds',
    'getDay',
    'getUTCFullYear',
    'getUTCMonth',
    'getUTCDate',
    'getUTCHours',
    'getUTCMinutes',
    'getUTCSeconds',
    'getUTCMilliseconds',
    'getUTCDay',
    'toDateString',
    'toGMTString',
    'toISOString',
    'toJSON',
    'toLocaleDateString',
    'toLocaleString',
    'toLocaleTimeString',
    'toString',
    'toTimeString',
    'toUTCString',
  ];

  const dataPlain = {};
  methods.map(m => {
    dataPlain[m] = '';
  });
  const data = reactive({...dataPlain});
  function setBlank(){
    methods.map(m => {
      data[m] = '';
    });
  }
  function update(){
    let d = new Date(df.value);
    methods.map(m => {
      data[m] = d[m]();
    });
  }
  function onInput(e){
    let newD = e.target.value;
    df.value = newD;
    if(!convertFormattedDateToTimeStamp(newD)){
      setBlank();
      return;
    }
    update();
  }
  update();
</script>

<template>
  <div class="a4-wrapper">
    <div class="a4">
      <input :value="df" @input="onInput">
    </div>
  </div>

  <div class="a4-wrapper">
    <div class="a4">
      <div class="methods">
        <div class="method" v-for="(v,m) in data" :key="m">
          <div class="name" v-html="m"></div>
          <div class="value" v-html="v"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  html, body{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: monospace;
    background-color: #ebebeb;
  }
  .a4{
    width: 210mm;
    max-width: 100%;
    box-sizing: border-box;
    background-color: white;
    border-radius: 2mm;
  }
  .a4-wrapper{
    margin: 2mm;
  }
  input{
    font-size: 7mm;
    padding: 4mm;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2mm;
    outline: none;
    border: none;
  }
  .methods{
    display: flex;
    flex-direction: column;
    margin-top: 2mm;
    gap: 4mm;
    padding: 10mm;
  }
  .method{
    display: flex;
    flex-direction: row;
    font-size: 3.5mm;
    width: 100%
  }
  .method .name{
    width: 12em;
    max-width: 50%;
  }
  .method .value{
    max-width: 50%;
  }
</style>
