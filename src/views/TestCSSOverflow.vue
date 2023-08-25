<template>
  <div>
    <span>测试 overflow 属性的使用</span>
    <div class="overflow-test-container">
      <div class="overflow-visible-container column-container">
        <span>overflow:visible测试200x200</span> 
        <div class="overflow-visible-content"></div>
      </div>
      <div class="overflow-hidden-container column-container">
        <span>overflow:hidden测试 200x200</span> 
        <div class="overflow-hidden-content-300">
          300x300超出部分看不见了
        </div>
      </div>
      <div class="overflow-hidden-container-inner-visible column-container">
        <span>overflow:hidden,内部再嵌套一个visible:200x200</span> 
        <div class="overflow-hidden-content-100">
          <div class="overflow-visible-subcontent">
          </div>
        </div>
      </div>
      <div class="overflow-hidden-container-inner-auto column-container">
        <span>overflow:hidden,内部再嵌套一个auto:200x200</span> 
        <div class="overflow-auto-content">
          <div class="overflow-auto-subcontent">
          </div>
        </div>
      </div>
      <div class="overflow-clip-container column-container">
        <span>overflow:clip测试</span> 
        <div class="overflow-clip-content">
          和hidden区别在于，不可见部分是没有任何办法看见的，是不能通过代码滚动的方式看见。
        </div>
      </div>
      <div class="overflow-scroll-container column-container">
        <span>overflow:scroll测试</span> 
        <div class="overflow-scroll-content">
        </div>
      </div>
      <div class="overflow-auto-container column-container">
        <span>overflow:auto测试</span> 
        <div class="overflow-auto-content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>


.overflow-test-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .column-container {
    width: 200px;
    height: 200px;
  }
  .overflow-visible-container {
    overflow: visible;
    top: 10px;
    background-color: aqua;
    .overflow-visible-content {
      width: 300px;
      height: 300px;
      background-color: green;
    }
  }

  .overflow-hidden-container {
    overflow: hidden;
    top: 10px;
    background-color: aqua;
    .overflow-hidden-content-300 {
      width: 300px;
      height: 300px;
      background-color: green;
      color: white;
    }
  }

  .overflow-hidden-container-inner-visible {
    overflow: hidden;
    top: 10px;
    background-color: aqua;
    .overflow-hidden-content-100 {
      overflow: visible;
      width: 100px;
      height: 100px;
      background-color: green;
      .overflow-visible-subcontent {
        margin-top: 20px;
        margin-left: 20px;
        width: 400px;
        height: 500px;
        background-color: burlywood;
      }
    }
  }


  .overflow-hidden-container-inner-auto {
    overflow: hidden;
    top: 10px;
    background-color: aqua;
    .overflow-auto-content {
      overflow: auto;
      width: 100px;
      height: 100px;
      background-color: green;
      .overflow-auto-subcontent {
        margin-top: 20px;
        margin-left: 20px;
        width: 400px;
        height: 500px;
        background-color: burlywood;
      }
    }
  }

  .overflow-clip-container {
    overflow: clip;
    background-color: aqua;
    .overflow-clip-content {
      margin-top: 10px;
      margin-left: 10px;
      width: 300px; 
      height: 300px; 
      background-color: greenyellow;
    }
  }

  .overflow-scroll-container {
    overflow: scroll;
    background-color: aqua;
    .overflow-scroll-content {
      margin-top: 10px;
      margin-left: 20px;
      width: 100px;
      height: 100px;
      background-color: bisque;
    }
  }

  .overflow-auto-container {
    overflow: auto;
    background-color: aqua;
    .overflow-auto-content {
      margin-top: 10px;
      margin-left: 20px;
      width: 100px;
      height: 400px;
      background-color: bisque;
    }
  }
 

}



</style>