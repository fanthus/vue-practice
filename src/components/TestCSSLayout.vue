<template>
  <div class="container">
    <div class="block-ele">block elements1</div>
    <div class="block-ele">block elements2</div>
    <div class="inline-ele">inline element1</div>
    <div class="inline-ele">inline element2</div>
    <br>
    <br>
    <div class="inline-block-ele">inline block element1</div>
    <div class="inline-block-ele">inline block element2</div>
    <div class="block-ele-float">block elements1</div>
    <div class="block-ele-float">block elements2</div>

    <div class="block-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
    <div class="flex-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
</template>

<script> </script>

<style>



/* block 1.换行 2.width height 生效 */
.block-ele {
  display: block;
  width: 100px;
  height: 100px;
  margin-top: 2px;
  background-color: aqua;
}

/* inline 1.不换行 2.width height 不生效 */
.inline-ele {
  display: inline;
  width: 100px;     
  height: 100px;
  margin-left: 2px;
  background-color: greenyellow;
}

/* inline 1.不换行 2.width height 生效 */
.inline-block-ele {
  display: inline-block;
  width: 100px;     
  height: 100px;
  margin-left: 2px;
  background-color: greenyellow;
}


.block-ele-float {
  display: block;
  width: 100px;
  height: 100px;
  margin-top: 2px;
  float: inline-end;
  background-color: green;
}

.block-container {
  display: block;
}

.flex-container {
  display: flex;  
}

.item {
  background-color: gainsboro;
}

</style>