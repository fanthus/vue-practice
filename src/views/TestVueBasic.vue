<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <div v-if="shouldShow">ShouldShow</div>
    <button @click="click">点我执行JS代码</button>
    <div>
      <div v-for="(item, index) in persons" :key="index">
        <div v-if="index<2">
          {{ item.name }}
        </div>
      </div>
      <div v-for="(item,index) in 3" :key="index">
        index:{{ index }} -  item:{{ item }}
      </div>
    </div>
    <br>
    <div ref="helloref">
      <button @click="getRef">获取refs</button>
    </div>
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
      persons:[{
        "name": "fan",
        "score": 97
      },{
        "name": "wang",
        "score": 100
      },{
        "name": "zheng",
        "score": 99
      }]
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  mounted() {
    this.getRef()
  },
  methods: {
    click() {
      this.shouldShow = !this.shouldShow;
      console.log(time);
      console.log(`${curTime}, ${name}, ${number}, ${realRandom()}`);
      // console.log(nodetime);
    },
    getRef() {
      console.log("get refs",this.$refs)
      console.log("get refs",this.$refs.helloref)
      this.$refs.helloref.scrollIntoView({ 
        behavior: 'smooth',
        block: `end`
      }); // 使用平滑滚动效果
    }
  },
};
</script>
<style>
</style>
