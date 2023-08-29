<template>
  <div class="container">
    <div @click="clickPrint">
      {{ name }}
    </div>
  </div>
</template>

<script>

import mixin from "./../mixins/common-methods"

export default {
  data() {
    return {
      name: "hello world"
    }
  },
  mixins:[mixin],
  created() {
    console.log("created")
  },
  methods: {
    clickPrint(){
      this.printMixin();
    }
  }
}

</script>

<style lang="scss" scoped>

</style>