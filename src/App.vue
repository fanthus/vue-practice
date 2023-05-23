<template>
  <div id="app">
    <div>
      <router-link to="/test">GoTestEM</router-link>
    </div>
    <div>
      <router-link to="/hello">Go Helloworld</router-link>
    </div>
    <TestComponent component-name="hello---world"/>
    <p style="background-color: antiquewhite; height: 1px;"></p>
    <router-view> </router-view>
  </div>
</template>

<script>

import TestComponent from './components/TestComponent.vue';

export default {
  name: 'App',
  components: {
    TestComponent
  }
}

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
</style>
