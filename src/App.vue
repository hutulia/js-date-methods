<script setup>
  const date = '2025-09-01T00:00:00+00:00';
  const d = new Date(date);
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
  const data = {};
  methods.map(m => {
    data[m] = d[m]();
  });
</script>

<template>
  <input :value="date">
  <table>
    <tr v-for="(v,m) in data">
      <td v-html="m"></td>
      <td v-html="v"></td>
    </tr>
  </table>
</template>

<style scoped></style>
