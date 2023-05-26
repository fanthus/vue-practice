<template>
  <div class="root-div">
    Box 盒子属性
    <div class="content-box">
      <div class="content-box-inner">content-box</div>
      <div class="border-box-inner">border-box</div>
    </div>
    <div class=""></div>
  </div>
</template>
<script>
</script>
<style>

.content-box {
  width: 100%;
  height: 100%;
}

.content-box-inner {
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  border: 1px solid #888888;
  padding: 10px;

  background-color: antiquewhite;
}

.border-box-inner {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid #888888;
  padding: 10px;
  background-color: antiquewhite;
}

</style>
