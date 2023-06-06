<template>
  <div class="container">
    <div class="navibar corner"></div>
    <div class="row-container corner">
      <div class="left-grid corner"></div>
      <div class="right-grid corner">
        <div class="small-grid corner"></div>
        <div class="small-grid corner"></div>
        <div class="small-grid corner"></div>
        <div class="small-grid corner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestHomePage",
  data() {
    return {
      name: "TestHomePage",
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.navibar {
  width: 100%;
  height: 44px;
  background-color: brown;
}

.row-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.left-grid {
  width: 50%;
  height: 200px;
  margin-top: 10px;
  background-color: aqua;
}

.right-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  height: 200px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: aquamarine;
}

.small-grid {
  width: 45%;
  height: 40%;
  background-color: blue;
  margin: 10px;
}

.corner {
  border-radius: 8px;
}

</style>