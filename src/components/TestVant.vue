<template lang="">
  <div class="container">
    <div class="vant-container">
      <div class="vant-popup">
        <div class="vant-popup-ctrl" @click="clickPopup">点我</div>
        <van-button type="primary">主要按钮</van-button>
        <van-popup v-model="showPopup">内容</van-popup>
      </div>
    </div>
  </div>
</template>

<script>


export default ({
  data() {
    return {
      showPopup: false
    };
  },
  mounted(){
    console.log("mounted");
  },  
  methods: {
    clickPopup() {
      console.log("clickPop");
      this.showPopup = !this.showPopup
    }
  }
})

</script>

<style lang="scss" scoped>



</style>