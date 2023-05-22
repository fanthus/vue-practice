<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestEM/>
    <TestComponent component-name="hello---world"/>
    <router-link to="testem">GoTestEM</router-link>
    <router-link to="/hello">Helloworld</router-link>
    <router-link :to="{path: '/hello'}"> Helloworld </router-link>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestEM from './components/TestEM.vue'
import TestComponent from './components/TestComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestEM,
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
