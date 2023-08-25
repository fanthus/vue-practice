<template>
  <div class="container">
    <div class="position-container">
      <span>父组件使用 position 属性的情况</span>
      <div class="secion-one">
        
        <div class="photo">
          <img
            class="photo-image"
            src="https://img2.baidu.com/it/u=1579991524,66947472&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
          <div class="counter">共三张</div>
        </div>
      </div>
      <span>flex 布局中子项使用 position 属性的情况</span>
      <div class="flex-position-container">
        <div class="flex-container-position-relative-top column-container">
          <div>Position relative 使用</div>
          <div class="item-green"></div>
          <div class="item-pos-relative-top">
            依然在当前flex布局流，只不过位置变为相对位置，而不是默认位置，设置为top
          </div>
          <div class="item-brown"></div>
        </div>
        <div class="flex-container-position-relative-margintop column-container">
          <div>Position relative 使用</div>
          <div class="item-green"></div>
          <div class="item-pos-relative-margintop">
            依然在当前flex布局流，只不过位置变为相对位置，设置为marginTop影响流内接下来的视图布局
          </div>
          <div class="item-brown"></div>
        </div>
        <br/>
        <div class="flex-container-position-absolute-top column-container">
          <span>Position absolute(top)使用</span>
          <div class="item-green">下面这个absolute元素在文档最上面</div>
          <div class="item-pos-absolute-top">
            在当前界面最上面（top30），已经彻底脱离flex布局流了
          </div>
          <div class="item-brown"></div>
        </div>
        <br/>
        <div class="flex-container-position-absolute-margintop column-container">
          <span class="column-container-title">Position abosulte(margin-top)使用</span>
          <div class="item-green">下面这个absolute元素在文档最上面</div>
          <div class="item-pos-absolute-margintop">
            脱离flex布局流，和relative区别在于marginTop控制的是距当前容器顶部的距离
          </div>
          <div class="item-brown"></div>
        </div>
        <br/>
        <div class="flex-container-position-relative-absolute column-container">
          <div>Position 中 relative 和 absolute 混用</div>
          <div class="item-green"></div>
          <div class="item-relative-top">
            item-relative-top
            <div class="item-absolute-inrelative">item-pos-absolute-top</div>
          </div>
          <div class="item-brown"></div>
        </div>
        <br/><br/>
        <div class="flex-container-position-fixed column-container">
          <span>Position 中 fixed 使用</span>
          <div class="item-green"></div>
          <div class="item-pos-fixed"></div>
          <div class="item-brown"></div>
        </div>
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

.position-container {
  display: flex;
  flex-direction: column;
  .secion-one {
    .photo {
      /* display: flex; */ /* 其实和flex布局没有关系 */
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

  .flex-position-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .column-container {
      display: flex;
      flex-direction: column;
      width: 300px;
      .column-container-title {
        font-size: smaller;
      }
    }
    .item-green {
      background-color: greenyellow;
      height: 50px;
    }
    .item-brown {
      background-color: brown;
      height: 50px;
    }

    .flex-container-position-relative-top {
      .item-pos-relative-top {
        background-color: burlywood;
        position: relative;
        height: 40px;
        top: 20px;
        left: 20px;
        font-size: small;
      }
    }
    
    .flex-container-position-relative-margintop {
      margin-left: 20px;
      .item-pos-relative-margintop {
        background-color: burlywood;
        position: relative;
        height: 40px;
        margin-top: 20px;
        left: 20px;
        font-size: small;
      }
    }

    .flex-container-position-absolute-top {
      margin-left: 20px;
      .item-pos-absolute-top {
        background-color: darkgrey;
        position: absolute;
        height: 30px;
        width: 100%;
        top: 30px;
        left: 30px;
      }
    }
    .flex-container-position-absolute-margintop {
      margin-left: 20px;
      width: 300px;
      .item-pos-absolute-margintop {
        background-color: darkgrey;
        // position: absolute;
        height: 60px;
        width: 300px;
        // width: 100%;
        margin-top: 30px;
        margin-left: 10px;
        font-size: smaller;
      }
    }

    .flex-container-position-relative-absolute {
      margin-left: 20px;
      .item-relative-top {
        position: relative;
        background-color: green;
        top: 20px;
        width: 200px;
        .item-absolute-inrelative {
          position: absolute;    
          width: 100%; 
          top: 10px;
          background-color: aqua;
        }
      }
    }

    .flex-container-position-fixed {
      .item-pos-fixed {
        position: fixed;
        background-color: blue;
        width: 100%;
        height: 30px;
        margin-top: 20px;
      }
    }

    
  }
}
</style>