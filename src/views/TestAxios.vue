<template>
  <div>
    <button @click="getMethod"> 点击执行 Get 方法</button>    
    <div></div>
    <button @click="postFormMethod"> 点击执行 Form Post 方法</button>    
    <div></div>
    <button @click="postJSONMethod"> 点击执行 JSON Post 方法</button>    
    <div>{{ response.data }}</div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "App",
  data() {
    return {
      message: "Hello!",
      shouldShow: false,
      response: "",
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  created() {},
  methods: {
    getMethod() {
      axios({
        method: "get",
        url: "https://httpbin.org/get",
      }).then((response) => {
        this.response = response;
      });
    },
    postFormMethod() {
      let params = {
        name: "fanthus",
        age:19
      }
      axios({
        method: "post",
        url: "https://httpbin.org/post",
        data: qs.stringify(params)
      }).then((response) => {
        this.response = response;
      });
    },
    postJSONMethod() {
      let params = {
        name: "fanthus",
        age:19
      }
      axios({
        method: "post",
        url: "https://httpbin.org/post",
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        data: params
      }).then((response) => {
        this.response = response;
      });
    }
  },
};
</script>

<style>
</style>