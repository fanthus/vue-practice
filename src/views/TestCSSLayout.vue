<template>
  <div class="container">
    最外层是flex<br>布局，方便查看，
    <div class="block-container">
      块级布局 display: block;
      <div class="block-ele">block elements1</div>
      <div class="block-ele">block elements2</div>
    </div>
    <div class="inline-ele-container">
      块级布局 display: inline;
      <div class="inline-ele">inline element1</div>
      <div class="inline-ele">inline element2</div>
    </div>
    <div class="inline-block-ele-container">
      <div class="inline-block-ele">inline block element1</div>
      <div class="inline-block-ele">inline block element2</div>
    </div>
    <div class="block-ele-float-container">
      <div class="block-ele-float">block elements1</div>
      <div class="block-ele-float">block elements2</div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: row;
  background-color: skyblue;
}
.block-container {
  width: 100px;
  height: 100px;
  background-color: chartreuse;
  /* block 1.换行 2.width height 生效 */
  .block-ele {
    display: block;
    width: 100px;
    height: 100px;
    margin-top: 2px;
    background-color: aqua;
  }
}

.inline-ele-container {
  margin-left: 10px;
  background-color: burlywood;
  /* inline 1.不换行 2.width height 不生效 */
  .inline-ele {
    display: inline;
    width: 100px;
    height: 100px;
    margin-left: 2px;
    background-color: greenyellow;
  }
}

.inline-block-ele-container {
  margin-left: 10px;
  /* inline 1.不换行 2.width height 生效 */
  .inline-block-ele {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-left: 2px;
    background-color: greenyellow;
  }
}

.block-ele-float-container {
  margin-left: 10px;
  .block-ele-float {
    display: block;
    width: 100px;
    height: 100px;
    margin-top: 2px;
    float: inline-end;
    background-color: green;
  }
}

.block-container {
  display: block;
}

</style>