<template lang="">
  <div class="container">
    <div class="vant-container">
      <div class="vant-popup">
        <van-button type="primary" @click="clickPopup">点我弹框</van-button>
        <van-popup v-model="showPopup" position="bottom">内容
          <popupContentComponent>xx</popupContentComponent>
        </van-popup>
        
      </div>
    </div>
  </div>
</template>

<script>

import popupContentComponent from "./../components/PopupContentComponent.vue" 

export default ({
  data() {
    return {
      showPopup: false
    };
  },
  components: { popupContentComponent },
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