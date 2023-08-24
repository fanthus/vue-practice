<template>
  <div class="container">
    <div class="secion-one">
      <div class="font-bold">父组件使用 position 属性的情况</div>
      <div class="photo">
        <img class="photo-image" src="https://img2.baidu.com/it/u=1579991524,66947472&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        <div class="counter">
          共三张
        </div>
      </div>
    </div>
    <div class="section-two">
      <div class="font-bold">flex 布局中子项使用 position 属性的情况</div>
      <div>Position relative 使用</div>
      <div class="flex-container">
        <div class="item-pos-static"></div>
        <div class="item-pos-relative">依然在当前flex布局流，只不过位置变为相对位置，而不是默认位置</div>
        <div class="item-pos-static"></div>
      </div>
      <br>
      <div>Position abosulte(top)使用</div>
      <div class="flex-container">
        <div class="item-pos-static">下面这个absolute元素在文档最上面</div>
        <div class="item-pos-absolute-top">在当前界面最上面（top30），已经彻底脱离flex布局流了</div>
        <div class="item-pos-static"></div>
      </div>
      <br>
      <div>Position abosulte(margin-top)使用</div>
      <div class="flex-container">
        <div class="item-pos-static">下面这个absolute元素在文档最上面</div>
        <div class="item-pos-absolute-margintop">脱离flex布局流，和relative区别在于marginTop控制的是距当前容器顶部的距离</div>
        <div class="item-pos-static"></div>
      </div>
      <br>
      <div>Position 中 relative 和 abosulte 混用</div>
      <div class="flex-container">
        <div class="item-pos-static"></div>
        <div class="item-pos-relative">
          <div class="item-pos-absolute-top"></div>
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
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.font-bold {
  font-weight: 800;
  font-size: large;
}

.secion-one {
  .photo {
  /* display: flex; */  /* 其实和flex布局没有关系 */
  position: relative;
  width: 100px;
  height: 100px;
  background-color: blue;
  
  .photo-image {
    top: 10px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .counter {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: #33333380;
    color: white;
  }
}
}

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

.item-pos-absolute-top {
  background-color: darkgrey;
  position: absolute;
  width: 100%;
  height: 30px;
  top: 30px;
  left: 30px;
}

.item-pos-absolute-margintop {
  background-color: darkgrey;
  position: absolute;
  width: 100%;
  height: 30px;
  margin-top: 30px;
  left: 30px;
}

.item-pos-fixed {
  position: fixed;
  background-color: blue;
  width: 100%;
  height: 30px;
  margin-top: 20px;
}


</style>