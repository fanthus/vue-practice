<template>
  <div>
    <div class="flex-column-container">
      <div class="flexlayout-container-one">
        <div class="item-one">第一个</div>
        <div class="item-two item-size">第二个</div>
        <div class="item-three item-size"></div>
      </div>
      <br>
      <div class="flexlayout-container-two">
        <div class="red-one">第一个</div>
        <div class="green-two item-size">第二个</div>
        <div class="blue-three item-size"></div>
      </div>
      <br>
      <span>shrink 不生效的场景獸值👇</span>
      <div class="flexlayout-container-three">
        <div class="pink">第一个</div>
        <div class="purple item-size">第二个</div>
        <div class="darkgray item-size"></div>
      </div>
    </div>
    
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.flex-column-container {
  display: flex;
  flex-direction: column;

  .flexlayout-container-one {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    height: 100px;
    background-color: aquamarine;
    overflow: auto;

    .item-one {
      background-color: red;
    }
    .item-two {
      background-color: green;
      width: 100px;
      height: 100px;
    }
    .item-three {
      background-color: blue;
      width: 150px;
      height: 100px;
      flex-grow: 1;
    }
  }

  .flexlayout-container-two {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 100px;

    .red-one {
      background-color: red;
      flex-shrink: 0;
    }
    .green-two {
      background-color: green;
      width: 100px;
      height: 100px;
      flex-shrink: 0;
    }
    .blue-three {
      background-color: blue;
      width: 150px;
      height: 100px;
    }
  }

  .flexlayout-container-three {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 100px;
    background-color: antiquewhite;
    .pink {
      background-color: pink;

    }
    .purple {
      background-color: purple;
      width: 100px;
      flex-shrink: 2;  /* 理论上应该是缩小的，但是实际没有反应，设置和不设置效果一样 */
    }
    .darkgray {
      background-color: darkgray;
      width: 150px;
    }
  }

}


</style>
