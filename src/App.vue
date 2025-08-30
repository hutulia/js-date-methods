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
  <input :value="df" @input="onInput">
  <table>
    <tr v-for="(v,m) in data" :key="m">
      <td v-html="m"></td>
      <td v-html="v"></td>
    </tr>
  </table>
</template>

<style scoped></style>
