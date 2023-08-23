<template>
  <div class="container">
    <div class="image-button">图片阴影测试</div>
    <br>
    <br>
    <div class="background-container">
      <div class="background-img1">背景图片测试1</div>
      <div class="background-img2">背景图片测试2</div>
      <div class="background-img3">背景图片测试3</div>
    </div>
  </div>
</template>

<script>
</script>

<style>

.image-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 69px;
  box-shadow: 0px 16px 16px 0px rgba(243, 135, 112, 0.54);
  background: url("https://image.sodaapp.com.cn/chengjia-mp/images/20230809/sku/pay-btn-bg.png")
    no-repeat;
  background-color: #00000000;
  width: 690px !important;
  height: 138px !important;
  background-size: 100% 100%;
}

.background-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.background-img1 {
  background-color: aqua;
  width: 300px;
  height: 500px;
  background-image: url('https://image.soulink.com.cn/fe/projects/chengjia-mp/images/77couponbg.png');
  background-size: 100% 100%;
  background-repeat: repeat;
}

.background-img2 {
  background-color: aqua;
  width: 300px;
  height: 500px;
  background-image: url('https://image.soulink.com.cn/fe/projects/chengjia-mp/images/77couponbg.png');
  background-size: 100px auto;
  background-repeat: repeat;
}

.background-img3 {
  background-color: aqua;
  width: 300px;
  height: 500px;
  background-image: url('https://image.soulink.com.cn/fe/projects/chengjia-mp/images/77couponbg.png');
  background-size: contain;
  background-repeat: no-repeat;
}





</style>