<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <div v-if="shouldShow">ShouldShow</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello!",
      shouldShow: false
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    }
  }
};
</script>
<style>
</style>
