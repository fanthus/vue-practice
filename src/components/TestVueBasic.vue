<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <div v-if="shouldShow">ShouldShow</div>
    <button @click="click">点我执行JS代码</button>
  </div>
</template>

<script>

import time from "./TestESDefaultExport.js";
// import value from "./TestESExport.js";   //这样有问题
import {curTime, name, number, realRandom} from "./TestESExport.js";

// const nodetime = require("./TestNodeExport.js")

export default {
  name: "App",
  data() {
    return {
      message: "Hello!",
      shouldShow: false,
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    click() {
      // this.shouldShow = !this.shouldShow;
      console.log(time);
      console.log(`${curTime}, ${name}, ${number}, ${realRandom()}`);
      // console.log(nodetime);
    },
  },
};
</script>
<style>
</style>
