<template>
  <div class="container">
    <div class="container-fater">
      这是父组件
      <div>
        点了吗{{ clicked }}
        <button @click="clickSendMsgToChild">点我向子组件发信息</button>
      </div>
      <br>
      <ChildComponent :bindChildName="this.childName" childName="xxx" ref="child">Child</ChildComponent>
    </div>
  </div>
</template>

<script>

import ChildComponent from "./TestComponentChild.vue"

export default {
  name: "FatherComponent",
  components: {
    ChildComponent
  },
  data() {
    return {
      childName:"this is child name from father",
      clicked:false
    }
  },
  methods: {
    clickSendMsgToChild() {
      this.clicked = true
      this.$refs.child.someOneClickMe()
    },
    fatherMethod() {
      console.log("#father# this is father method")
    }
  }
}

</script>

<style lang="scss" scoped>

</style>