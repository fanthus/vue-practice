<template>
  <div class="container">
    <div>Position relative 使用</div>
    <div class="flex-container">
      <div class="item-pos-static"></div>
      <div class="item-pos-relative"></div>
      <div class="item-pos-static"></div>
    </div>
    <br>
    <div>Position abosulte 使用</div>
    <div class="flex-container">
      <div class="item-pos-static">下面这个absolute元素在文档最上面</div>
      <div class="item-pos-absolute"></div>
      <div class="item-pos-static"></div>
    </div>
    <br>
    <div>Position 中 relative 和 abosulte 混用</div>
    <div class="flex-container">
      <div class="item-pos-static"></div>
      <div class="item-pos-relative">
        <div class="item-pos-absolute"></div>
      </div>
      <div class="item-pos-static"></div>
    </div>
    <br><br>
    <div>Position 中 relative 和 abosulte 混用</div>
    <div class="flex-container">
      <div class="item-pos-static"></div>
      <div class="item-pos-fixed"></div>
      <div class="item-pos-static"></div>
    </div>
  </div>
</template>

<script>
</script>

<style>

.flex-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.item-pos-static {
  background-color: greenyellow;
  width: 100%;
  height: 50px;
}

.item-pos-relative {
  background-color: brown;
  position: relative;
  width: 100%;
  height: 30px;
  top: 30px;
  left: 50px;
}

.item-pos-absolute {
  background-color: darkgrey;
  position: absolute;
  width: 100%;
  height: 30px;
  top: 30px;
  left: 30px;
}

.item-pos-fixed {
  position: fixed;
  background-color: blueviolet;
  width: 100%;
  height: 30px;
}


</style>