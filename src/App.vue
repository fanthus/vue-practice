<template>
  <div id="app">
    测试模块儿
    <ul>
      <li class="list-style">
        <router-link to="/test/component/communicate">测试父子组件通信</router-link>
      </li>
      <li class="list-style">
        <router-link to="/testcss">test css</router-link>
      </li>
      <li class="list-style">
        <router-link to="/testcsslayout">test css layout</router-link>
      </li>
      <li class="list-style">
        <router-link to="/test/css/position">test css position</router-link>
      </li>
      <li class="list-style">
        <router-link to="/testflexlayout">test flex layout</router-link>
      </li>
      <li class="list-style">
        <router-link to="/testvue">test vue & js basic</router-link>
      </li>
      <li class="list-style">
        <router-link to="/testaxios">test axios</router-link>
      </li>
      <li class="list-style">
        <router-link to="/test/home">自己模仿的一个网站首页</router-link>
      </li>
    </ul>

    <TestComponent component-name="hello---world" />
    <p style="background-color: antiquewhite; height: 1px"></p>
    <router-view> </router-view>
  </div>
</template>

<script>
import TestComponent from "./components/TestComponent.vue";

export default {
  name: "App",
  components: {
    TestComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list-style {
  text-align: left;
}
</style>
