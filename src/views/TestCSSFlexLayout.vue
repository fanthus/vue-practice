<template>
  <div>
    <div class="flex-column-container">
      <span>flex-grow 生效的场景👇</span>
      <div class="flexlayout-container-one">
        <div class="item-one">第一个</div>
        <div class="item-two item-size">第二个</div>
        <div class="item-three item-size"></div>
      </div>
      <br />
      <span>flex-shrink 生效的场景👇</span>
      <div class="flexlayout-container-two">
        <div class="red-one">第一个</div>
        <div class="green-two item-size"><span class="green-two-txt">第二个</span></div>
        <div class="blue-three item-size"></div>
      </div>
      <br />
      <span>shrink 不生效的场景獸值👇</span>
      <div class="flexlayout-container-three">
        <div class="pink">第一个</div>
        <div class="purple item-size">第二个</div>
        <div class="darkgray item-size"></div>
      </div>
      <span>flex骰子图(一个骰子)<a href="https://www.ruanyifeng.com/blog/2015/07/flex-examples.html">阮一峰:flex布局教程实例篇</a></span>
      <div class="total-onedice-container">
        <div class="dice-topleft dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-topcenter dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-topright dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-centerleft dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-centercenter dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-centerright dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-btmleft dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-btmcenter dice-container">
          <span class="dice-item"></span>
        </div>
        <div class="dice-btmright dice-container">
          <span class="dice-item"></span>
        </div>
      </div>
      <span>flex骰子图(两个骰子)<a href="https://www.ruanyifeng.com/blog/2015/07/flex-examples.html">阮一峰:flex布局教程实例篇</a></span>
      <div class="total-twodice-container">
        <div class="twodice-topleft-topright dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
        </div>
        <div class="twodice-topcenter-btmcenter dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
        </div>
        <div class="twodice-topright-btmright dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
        </div>
        <div class="twodice-topleft-centercenter dice-container">
          <span class="dice-item"></span>
          <span class="dice-item twodice-center"></span>
        </div>
        <div class="twodice-topleft-btmright dice-container">
          <span class="dice-item"></span>
          <span class="dice-item twodice-btmright"></span>
        </div>
      </div>
      <span>flex骰子图(三/四/五/九个骰子)<a href="https://www.ruanyifeng.com/blog/2015/07/flex-examples.html">阮一峰:flex布局教程实例篇</a></span>
      <div class="total-moredice-container">
        <div class="three-topleft-center-btmright dice-container">
          <span class="dice-item"></span>
          <span class="dice-item threedice-center"></span>
          <span class="dice-item threedice-btmright"></span>
        </div>
        <div class="fourdice-topleft-topcenter-topright-btmright dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item fourcedice-btmright"></span>
        </div>
        <div class="fourdice-topleft-topright-btmleft-btmright dice-container">
          <div class="fourdice-left-column-container">
            <span class="dice-item"></span>
            <span class="dice-item"></span>
          </div>
          <div class="fourdice-right-column-container">
            <span class="dice-item"></span>
            <span class="dice-item fourcedice-btmright"></span>
          </div>
        </div>
        <div class="sixdice-first dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
        </div>
        <div class="sixdice-second dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
        </div>
        <div class="sixdice-third dice-container">
          <div class="sixdice-third-firstrow">
            <span class="dice-item"></span>
            <span class="dice-item"></span>
            <span class="dice-item"></span>
          </div>
          <div class="sixdice-third-secondrow">
            <span class="dice-item"></span>
          </div>
          <div class="sixdice-third-thirdrow">
            <span class="dice-item"></span>
            <span class="dice-item"></span>
          </div>
        </div>
        <div class="ninedice dice-container">
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
          <span class="dice-item"></span>
        </div>
      </div>
    </div>
    <br />
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
      display: flex;
      justify-content: center;
      // 这儿的另外一种实现是，设置 align-items: center
      .green-two-txt {
        color: white;
        align-self: center;
      }
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
      flex-shrink: 2; /* 理论上应该是缩小的，但是实际没有反应，设置和不设置效果一样 */
    }
    .darkgray {
      background-color: darkgray;
      width: 150px;
    }
  }

  .dice-container {
    background-color: antiquewhite;
    border-radius: 5px;
    width: 100px;
    height: 100px;
  }

  .dice-item {
    width: 30px;
    height: 30px;
    background-color: darkmagenta;
    border-radius: 10px;
  }
  .total-onedice-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .dice-topleft {
      display: flex;
      // flex-direction: row;         //用不用都行默认是row
      justify-content: flex-start; //要加flex前缀
    }
    .dice-topcenter {
      display: flex;
      justify-content: center;
    }
    .dice-topright {
      display: flex;
      justify-content: flex-end;
    }

    .dice-centerleft {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .dice-centercenter {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dice-centerright {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .dice-btmleft {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }

    .dice-btmcenter {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .dice-btmright {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

  .total-twodice-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .twodice-topleft-topright {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .twodice-topcenter-btmcenter {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .twodice-topright-btmright {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
    .twodice-topleft-centercenter{
      display: flex;
      .twodice-center {
        align-self: center;
      }
    }
    .twodice-topleft-btmright {
      display: flex;
      justify-content: space-between;

      .twodice-btmright {
        align-self: flex-end;
      }
    }
  }

  .total-moredice-container {
    display: flex;
    justify-content: space-between;
    .three-topleft-center-btmright {
      display: flex;
      justify-content: space-between;

      .threedice-center {
        align-self: center;
      }

      .threedice-btmright {
        align-self: flex-end;
      }
    }
    .fourdice-topleft-topcenter-topright-btmright {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row-reverse;
      .fourcedice-btmright {
        align-self: flex-end;
      }
    }
    .fourdice-topleft-topright-btmleft-btmright{
      display: flex;
      justify-content: space-between;
      .fourdice-left-column-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .fourdice-right-column-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .sixdice-first {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }
    .sixdice-second {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
    }
    .sixdice-third {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
      .sixdice-third-firstrow {
        display: flex;
        justify-content: space-between;
      }
      .sixdice-third-secondrow {
        display: flex;
        justify-content: center;
      }
      .sixdice-third-thirdrow {
        display: flex;
        justify-content: space-between;
      }
    }
    .ninedice{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }
  } 

}
</style>
