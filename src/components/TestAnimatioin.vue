<template>
  <div class="container">
    <div class="box" @animationiteration="onAnimationIteration">
      {{ name }}
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      name
    }
  },
  mounted() {
    this.name = "mounted"
  },
  methods: {
    onAnimationIteration(event) {
      console.log("Animation iteration completed:", event);
      this.name = "onAnimationIteration"
      // 在这里执行动画迭代完成后的逻辑
    }
  }
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  color: white;
  background-color: blue;
  animation: moveBox 1s infinite;
}

@keyframes moveBox {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}
</style>