<template>
  <div class="child-container">
    <div>
      子组件展示信息
      <div>
        <button @click="printProperty">点我打印属性内容</button>
      </div>
      <div>
        <button @click="clickSendMsgToParent">点我向父组件传递信息</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"ChildComponent",
  data() {
    return {
      
    }
  },
  props: [
    'childName',
    'bindChildName',
  ],
  methods: {
    printProperty() {
      console.log(this.bindChildName);
      console.log(this.childName);
    },
    clickSendMsgToParent() {
      console.log("clickSendMsgToParent");
    },
    someOneClickMe() {
      console.log("someOneClickMe");
    }
  }
}

</script>

<style>

.child-container {
  margin: 10px 10px 10px 10px;
  border: 1px solid #000; /* 宽度为1px，实线边框，颜色为 #ccc */
}

</style>
